// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict'

var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
    ? R.apply
    : function ReflectApply(target, receiver, args) {
        return Function.prototype.apply.call(target, receiver, args)
    }

var ReflectOwnKeys: any
if (R && typeof R.ownKeys === 'function') {
    ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target)
            // @ts-ignore
            .concat(Object.getOwnPropertySymbols(target))
    }
} else {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target)
    }
}

function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning)
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value
}

export class EventEmitter {
    _events = undefined
    _eventsCount = 0
    _maxListeners = undefined

    static listenerCount(emitter, type) {
        if (typeof emitter.listenerCount === 'function') {
            return emitter.listenerCount(type)
        } else {
            return listenerCount.call(emitter, type)
        }
    }

    constructor() {
        if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
            this._events = Object.create(null)
            this._eventsCount = 0
        }
        this._maxListeners = this._maxListeners || undefined
    }

    setMaxListeners(n) {
        if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.')
        }
        this._maxListeners = n
        return this
    }

    getMaxListeners() {
        return _getMaxListeners(this)
    }

    emit(type, ...args: any[]) {
        var args = []
        for (var i = 1; i < arguments.length; i++) args.push(arguments[i])
        var doError = (type === 'error')

        var events = this._events
        if (events !== undefined)
            doError = (doError && events.error === undefined)
        else if (!doError)
            return false

        // If there is no 'error' event listener then throw.
        if (doError) {
            var er
            if (args.length > 0)
                er = args[0]
            if (er instanceof Error) {
                // Note: The comments on the `throw` lines are intentional, they show
                // up in Node's output if this results in an unhandled exception.
                throw er // Unhandled 'error' event
            }
            // At least give some kind of context to the user
            var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''))
            // @ts-ignore
            err.context = er
            throw err // Unhandled 'error' event
        }

        var handler = events[type]

        if (handler === undefined)
            return false

        if (typeof handler === 'function') {
            ReflectApply(handler, this, args)
        } else {
            var len = handler.length
            var listeners = arrayClone(handler, len)
            for (var i = 0; i < len; ++i)
                ReflectApply(listeners[i], this, args)
        }

        return true
    }
    on(type, listener) {
        return _addListener(this, type, listener, false)
    }
    addListener(type, listener) {
        return _addListener(this, type, listener, false)
    }
    prependListener(type, listener) {
        return _addListener(this, type, listener, true)
    }
    once(type, listener) {
        checkListener(listener)
        this.on(type, _onceWrap(this, type, listener))
        return this
    }
    prependOnceListener(type, listener) {
        checkListener(listener)
        this.prependListener(type, _onceWrap(this, type, listener))
        return this
    }
    off(type, listener) {
        return this.removeListener(type, listener)
    }
    removeListener(type, listener) {
        var list, events, position, i, originalListener

        checkListener(listener)

        events = this._events
        if (events === undefined)
            return this

        list = events[type]
        if (list === undefined)
            return this

        if (list === listener || list.listener === listener) {
            if (--this._eventsCount === 0)
                this._events = Object.create(null)
            else {
                delete events[type]
                if (events.removeListener)
                    this.emit('removeListener', type, list.listener || listener)
            }
        } else if (typeof list !== 'function') {
            position = -1

            for (i = list.length - 1; i >= 0; i--) {
                if (list[i] === listener || list[i].listener === listener) {
                    originalListener = list[i].listener
                    position = i
                    break
                }
            }

            if (position < 0)
                return this

            if (position === 0)
                list.shift()
            else {
                spliceOne(list, position)
            }

            if (list.length === 1)
                events[type] = list[0]

            if (events.removeListener !== undefined)
                this.emit('removeListener', type, originalListener || listener)
        }

        return this
    }
    removeAllListeners(type?: string) {
        var listeners, events, i

        events = this._events
        if (events === undefined)
            return this

        // not listening for removeListener, no need to emit
        if (events.removeListener === undefined) {
            if (arguments.length === 0) {
                this._events = Object.create(null)
                this._eventsCount = 0
            } else if (events[type] !== undefined) {
                if (--this._eventsCount === 0)
                    this._events = Object.create(null)
                else
                    delete events[type]
            }
            return this
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            var keys = Object.keys(events)
            var key
            for (i = 0; i < keys.length; ++i) {
                key = keys[i]
                if (key === 'removeListener') continue
                this.removeAllListeners(key)
            }
            this.removeAllListeners('removeListener')
            this._events = Object.create(null)
            this._eventsCount = 0
            return this
        }

        listeners = events[type]

        if (typeof listeners === 'function') {
            this.removeListener(type, listeners)
        } else if (listeners !== undefined) {
            // LIFO order
            for (i = listeners.length - 1; i >= 0; i--) {
                this.removeListener(type, listeners[i])
            }
        }

        return this
    }
    listeners(type) {
        return _listeners(this, type, true)
    }
    rawListeners(type) {
        return _listeners(this, type, false)
    }
    eventNames() {
        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : []
    }
    listenerCount = listenerCount
}

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10

function checkListener(listener) {
    if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener)
    }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function () {
        return defaultMaxListeners
    },
    set: function (arg) {
        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.')
        }
        defaultMaxListeners = arg
    }
})

function _getMaxListeners(that) {
    if (that._maxListeners === undefined)
        // @ts-ignore
        return EventEmitter.defaultMaxListeners
    return that._maxListeners
}

function _addListener(target, type, listener, prepend) {
    var m
    var events
    var existing

    checkListener(listener)

    events = target._events
    if (events === undefined) {
        events = target._events = Object.create(null)
        target._eventsCount = 0
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit('newListener', type,
                listener.listener ? listener.listener : listener)

            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events
        }
        existing = events[type]
    }

    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener
        ++target._eventsCount
    } else {
        if (typeof existing === 'function') {
            // Adding the second element, need to change to array.
            existing = events[type] =
                prepend ? [listener, existing] : [existing, listener]
            // If we've already got an array, just append.
        } else if (prepend) {
            existing.unshift(listener)
        } else {
            existing.push(listener)
        }

        // Check for listener leak
        m = _getMaxListeners(target)
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error('Possible EventEmitter memory leak detected. ' +
                existing.length + ' ' + String(type) + ' listeners ' +
                'added. Use emitter.setMaxListeners() to ' +
                'increase limit')
            w.name = 'MaxListenersExceededWarning'
            // @ts-ignore
            w.emitter = target
            // @ts-ignore
            w.type = type
            // @ts-ignore
            w.count = existing.length
            ProcessEmitWarning(w)
        }
    }

    return target
}

function onceWrapper(this: any) {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn)
        this.fired = true
        if (arguments.length === 0)
            return this.listener.call(this.target)
        return this.listener.apply(this.target, arguments)
    }
}

function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener }
    var wrapped = onceWrapper.bind(state)
    // @ts-ignore
    wrapped.listener = listener
    state.wrapFn = wrapped
    return wrapped
}

function _listeners(target, type, unwrap) {
    var events = target._events

    if (events === undefined)
        return []

    var evlistener = events[type]
    if (evlistener === undefined)
        return []

    if (typeof evlistener === 'function')
        return unwrap ? [evlistener.listener || evlistener] : [evlistener]

    return unwrap ?
        unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length)
}

function listenerCount(this: any, type) {
    var events = this._events

    if (events !== undefined) {
        var evlistener = events[type]

        if (typeof evlistener === 'function') {
            return 1
        } else if (evlistener !== undefined) {
            return evlistener.length
        }
    }

    return 0
}

function arrayClone(arr, n) {
    var copy = new Array(n)
    for (var i = 0; i < n; ++i)
        copy[i] = arr[i]
    return copy
}

function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
        list[index] = list[index + 1]
    list.pop()
}

function unwrapListeners(arr) {
    var ret = new Array(arr.length)
    for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i]
    }
    return ret
}
