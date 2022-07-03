'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

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
'use strict';
var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function'
    ? R.apply
    : function ReflectApply(target, receiver, args) {
        return Function.prototype.apply.call(target, receiver, args);
    };
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
    ReflectOwnKeys = R.ownKeys;
}
else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target)
            // @ts-ignore
            .concat(Object.getOwnPropertySymbols(target));
    };
}
else {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target);
    };
}
function ProcessEmitWarning(warning) {
    if (console && console.warn)
        console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this._events = undefined;
        this._eventsCount = 0;
        this._maxListeners = undefined;
        this.listenerCount = listenerCount;
        if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        }
        this._maxListeners = this._maxListeners || undefined;
    }
    EventEmitter.listenerCount = function (emitter, type) {
        if (typeof emitter.listenerCount === 'function') {
            return emitter.listenerCount(type);
        }
        else {
            return listenerCount.call(emitter, type);
        }
    };
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
        }
        this._maxListeners = n;
        return this;
    };
    EventEmitter.prototype.getMaxListeners = function () {
        return _getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var args = [];
        for (var i = 1; i < arguments.length; i++)
            args.push(arguments[i]);
        var doError = (type === 'error');
        var events = this._events;
        if (events !== undefined)
            doError = (doError && events.error === undefined);
        else if (!doError)
            return false;
        // If there is no 'error' event listener then throw.
        if (doError) {
            var er;
            if (args.length > 0)
                er = args[0];
            if (er instanceof Error) {
                // Note: The comments on the `throw` lines are intentional, they show
                // up in Node's output if this results in an unhandled exception.
                throw er; // Unhandled 'error' event
            }
            // At least give some kind of context to the user
            var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
            // @ts-ignore
            err.context = er;
            throw err; // Unhandled 'error' event
        }
        var handler = events[type];
        if (handler === undefined)
            return false;
        if (typeof handler === 'function') {
            ReflectApply(handler, this, args);
        }
        else {
            var len = handler.length;
            var listeners = arrayClone(handler, len);
            for (var i = 0; i < len; ++i)
                ReflectApply(listeners[i], this, args);
        }
        return true;
    };
    EventEmitter.prototype.on = function (type, listener) {
        return _addListener(this, type, listener, false);
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        return _addListener(this, type, listener, false);
    };
    EventEmitter.prototype.prependListener = function (type, listener) {
        return _addListener(this, type, listener, true);
    };
    EventEmitter.prototype.once = function (type, listener) {
        checkListener(listener);
        this.on(type, _onceWrap(this, type, listener));
        return this;
    };
    EventEmitter.prototype.prependOnceListener = function (type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
    };
    EventEmitter.prototype.off = function (type, listener) {
        return this.removeListener(type, listener);
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        var list, events, position, i, originalListener;
        checkListener(listener);
        events = this._events;
        if (events === undefined)
            return this;
        list = events[type];
        if (list === undefined)
            return this;
        if (list === listener || list.listener === listener) {
            if (--this._eventsCount === 0)
                this._events = Object.create(null);
            else {
                delete events[type];
                if (events.removeListener)
                    this.emit('removeListener', type, list.listener || listener);
            }
        }
        else if (typeof list !== 'function') {
            position = -1;
            for (i = list.length - 1; i >= 0; i--) {
                if (list[i] === listener || list[i].listener === listener) {
                    originalListener = list[i].listener;
                    position = i;
                    break;
                }
            }
            if (position < 0)
                return this;
            if (position === 0)
                list.shift();
            else {
                spliceOne(list, position);
            }
            if (list.length === 1)
                events[type] = list[0];
            if (events.removeListener !== undefined)
                this.emit('removeListener', type, originalListener || listener);
        }
        return this;
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        var listeners, events, i;
        events = this._events;
        if (events === undefined)
            return this;
        // not listening for removeListener, no need to emit
        if (events.removeListener === undefined) {
            if (arguments.length === 0) {
                this._events = Object.create(null);
                this._eventsCount = 0;
            }
            else if (events[type] !== undefined) {
                if (--this._eventsCount === 0)
                    this._events = Object.create(null);
                else
                    delete events[type];
            }
            return this;
        }
        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            var keys = Object.keys(events);
            var key;
            for (i = 0; i < keys.length; ++i) {
                key = keys[i];
                if (key === 'removeListener')
                    continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners('removeListener');
            this._events = Object.create(null);
            this._eventsCount = 0;
            return this;
        }
        listeners = events[type];
        if (typeof listeners === 'function') {
            this.removeListener(type, listeners);
        }
        else if (listeners !== undefined) {
            // LIFO order
            for (i = listeners.length - 1; i >= 0; i--) {
                this.removeListener(type, listeners[i]);
            }
        }
        return this;
    };
    EventEmitter.prototype.listeners = function (type) {
        return _listeners(this, type, true);
    };
    EventEmitter.prototype.rawListeners = function (type) {
        return _listeners(this, type, false);
    };
    EventEmitter.prototype.eventNames = function () {
        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };
    return EventEmitter;
}());
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
}
Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function () {
        return defaultMaxListeners;
    },
    set: function (arg) {
        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        }
        defaultMaxListeners = arg;
    }
});
function _getMaxListeners(that) {
    if (that._maxListeners === undefined)
        // @ts-ignore
        return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    }
    else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit('newListener', type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    }
    else {
        if (typeof existing === 'function') {
            // Adding the second element, need to change to array.
            existing = events[type] =
                prepend ? [listener, existing] : [existing, listener];
            // If we've already got an array, just append.
        }
        else if (prepend) {
            existing.unshift(listener);
        }
        else {
            existing.push(listener);
        }
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error('Possible EventEmitter memory leak detected. ' +
                existing.length + ' ' + String(type) + ' listeners ' +
                'added. Use emitter.setMaxListeners() to ' +
                'increase limit');
            w.name = 'MaxListenersExceededWarning';
            // @ts-ignore
            w.emitter = target;
            // @ts-ignore
            w.type = type;
            // @ts-ignore
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0)
            return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
    var wrapped = onceWrapper.bind(state);
    // @ts-ignore
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined)
        return [];
    var evlistener = events[type];
    if (evlistener === undefined)
        return [];
    if (typeof evlistener === 'function')
        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
    return unwrap ?
        unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === 'function') {
            return 1;
        }
        else if (evlistener !== undefined) {
            return evlistener.length;
        }
    }
    return 0;
}
function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
        copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
        list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
    }
    return ret;
}

var Transport = /** @class */ (function (_super) {
    __extends(Transport, _super);
    function Transport(uri, subProtocol, headers) {
        if (subProtocol === void 0) { subProtocol = ''; }
        if (headers === void 0) { headers = {}; }
        var _this = _super.call(this) || this;
        _this._state = WebSocket.CONNECTING;
        _this._headers = {};
        _this._url = uri;
        _this._protocol = subProtocol;
        _this._headers = headers;
        return _this;
    }
    Object.defineProperty(Transport.prototype, "id", {
        get: function () {
            return this.getId();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transport.prototype, "protocol", {
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transport.prototype, "readyStatus", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: false,
        configurable: true
    });
    Transport.prototype.connect = function () {
        try {
            this.doConnect();
        }
        catch (error) {
            this.onerror({ error: error });
        }
    };
    Transport.prototype.send = function (text) {
        try {
            this.doSend(text);
        }
        catch (error) {
            this.onerror({ error: error });
        }
    };
    Transport.prototype.close = function (code, reason) {
        if (code === void 0) { code = 0; }
        if (reason === void 0) { reason = ''; }
        if (this.readyStatus != WebSocket.CLOSING && this.readyStatus != WebSocket.CLOSED) {
            this.readyStatus = WebSocket.CLOSING;
            try {
                this.onclose({ code: code, reason: reason });
                this.doClose(code, reason);
            }
            catch (error) {
                this.onerror({ error: error });
            }
            finally {
                this.removeAllListeners();
            }
        }
        else {
        }
    };
    Transport.prototype.onconnection = function (event) {
        this._state == WebSocket.CONNECTING;
        this.emit('connecting', event);
    };
    Transport.prototype.onconnect = function (event) {
        if (this.readyStatus != WebSocket.OPEN) {
            this.readyStatus = WebSocket.OPEN;
            this.emit('open', event);
        }
        else {
        }
    };
    Transport.prototype.onmessage = function (event) {
        this.emit('message', event);
    };
    Transport.prototype.onerror = function (event) {
        this.emit('error', event);
    };
    Transport.prototype.onclose = function (event) {
        if (this.readyStatus != WebSocket.CLOSED) {
            this.readyStatus = WebSocket.CLOSED;
            this.emit('close', event);
            this.removeAllListeners();
        }
        else {
        }
    };
    return Transport;
}(EventEmitter));

var SimpleChannelInboundHandler = Java.type('io.netty.channel.SimpleChannelInboundHandler');
var WebSocketClientHandlerAdapter = /** @class */ (function () {
    function WebSocketClientHandlerAdapter() {
        var WebSocketClientHandlerAdapterImpl = Java.extend(SimpleChannelInboundHandler, {
            isSharable: this.isSharable.bind(this),
            handlerAdded: this.handlerAdded.bind(this),
            channelActive: this.channelActive.bind(this),
            channelInactive: this.channelInactive.bind(this),
            channelRead0: this.channelRead0.bind(this),
            exceptionCaught: this.exceptionCaught.bind(this)
        });
        this._Handler = new WebSocketClientHandlerAdapterImpl();
    }
    WebSocketClientHandlerAdapter.prototype.getHandler = function () {
        return this._Handler;
    };
    return WebSocketClientHandlerAdapter;
}());

var CharsetUtil = Java.type('io.netty.util.CharsetUtil');
var TextWebSocketFrame$1 = Java.type('io.netty.handler.codec.http.websocketx.TextWebSocketFrame');
var CloseWebSocketFrame$1 = Java.type('io.netty.handler.codec.http.websocketx.CloseWebSocketFrame');
var FullHttpResponse = Java.type('io.netty.handler.codec.http.FullHttpResponse');
var DefaultChannelPromise = Java.type('io.netty.channel.DefaultChannelPromise');
var WebSocketClientHandler = /** @class */ (function (_super) {
    __extends(WebSocketClientHandler, _super);
    function WebSocketClientHandler(handshaker, client) {
        var _this = _super.call(this) || this;
        _this.handshaker = handshaker;
        _this.client = client;
        return _this;
    }
    WebSocketClientHandler.prototype.isSharable = function () {
        return true;
    };
    WebSocketClientHandler.prototype.handlerAdded = function (ctx) {
        if (ctx.newPromise) {
            this.handshakeFuture = ctx.newPromise();
        }
        else {
            this.handshakeFuture = new DefaultChannelPromise(ctx.channel(), ctx.executor());
        }
    };
    WebSocketClientHandler.prototype.channelActive = function (ctx) {
        this.handshaker.handshake(ctx.channel());
    };
    WebSocketClientHandler.prototype.channelInactive = function (ctx) {
        this.client.onclose({ code: 0, reason: 'client connection channel inactive!' });
    };
    WebSocketClientHandler.prototype.channelRead0 = function (ctx, msg) {
        var ch = ctx.channel();
        if (!this.handshaker.isHandshakeComplete()) {
            // web socket client connected
            this.handshaker.finishHandshake(ch, msg);
            this.handshakeFuture.setSuccess();
            return;
        }
        if (msg instanceof FullHttpResponse) {
            var response = msg;
            throw new Error("Unexpected FullHttpResponse (getStatus=".concat(response.getStatus(), ", content=").concat(response.content().toString(CharsetUtil.UTF_8), ")"));
        }
        var frame = msg;
        if (frame instanceof TextWebSocketFrame$1) {
            this.client.onmessage({ data: frame.text() });
        }
        else if (frame instanceof CloseWebSocketFrame$1) {
            this.client.onclose({ code: 0, reason: 'server close connection!' });
        }
    };
    WebSocketClientHandler.prototype.exceptionCaught = function (ctx, cause) {
        this.client.onerror({ error: cause });
        if (!this.handshakeFuture.isDone()) {
            this.handshakeFuture.setFailure(cause);
        }
    };
    return WebSocketClientHandler;
}(WebSocketClientHandlerAdapter));

var URI = Java.type('java.net.URI');
var Bootstrap = Java.type('io.netty.bootstrap.Bootstrap');
var ChannelFutureListener = Java.type('io.netty.channel.ChannelFutureListener');
var NioEventLoopGroup = Java.type('io.netty.channel.nio.NioEventLoopGroup');
var NioSocketChannel = Java.type('io.netty.channel.socket.nio.NioSocketChannel');
var WebSocketClientHandshakerFactory = Java.type('io.netty.handler.codec.http.websocketx.WebSocketClientHandshakerFactory');
var WebSocketVersion = Java.type('io.netty.handler.codec.http.websocketx.WebSocketVersion');
var HttpClientCodec = Java.type('io.netty.handler.codec.http.HttpClientCodec');
var HttpObjectAggregator = Java.type('io.netty.handler.codec.http.HttpObjectAggregator');
var TextWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.TextWebSocketFrame');
var CloseWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.CloseWebSocketFrame');
var ChannelInitializer = Java.type('io.netty.channel.ChannelInitializer');
var DefaultHttpHeaders = Java.type('io.netty.handler.codec.http.DefaultHttpHeaders');
var AtomicInteger = Java.type("java.util.concurrent.atomic.AtomicInteger");
var channelCount = new AtomicInteger(0);
var SslContextBuilder;
var InsecureTrustManagerFactory;
var SSLContext;
var SslHandler;
try {
    SslContextBuilder = Java.type('io.netty.handler.ssl.SslContextBuilder');
    InsecureTrustManagerFactory = Java.type('io.netty.handler.ssl.util.InsecureTrustManagerFactory');
}
catch (error) {
    SSLContext = Java.type('javax.net.ssl.SSLContext');
    SslHandler = Java.type('io.netty.handler.ssl.SslHandler');
}
var group;
var socketChannelClass;
try {
    var Epoll = Java.type('io.netty.channel.epoll.Epoll');
    var epull = Epoll.isAvailable();
    var EpollEventLoopGroup = Java.type('io.netty.channel.epoll.EpollEventLoopGroup');
    var EpollSocketChannel = Java.type('io.netty.channel.epoll.EpollSocketChannel');
    group = epull ? new EpollEventLoopGroup() : new NioEventLoopGroup();
    socketChannelClass = epull ? EpollSocketChannel.class : NioSocketChannel.class;
}
catch (error) {
    group = new NioEventLoopGroup();
    socketChannelClass = NioSocketChannel.class;
}
var NettyWebSocket = /** @class */ (function (_super) {
    __extends(NettyWebSocket, _super);
    function NettyWebSocket(url, subProtocol, headers) {
        if (subProtocol === void 0) { subProtocol = ''; }
        if (headers === void 0) { headers = {}; }
        var _this = this;
        var _a;
        _this = _super.call(this, url, subProtocol, headers) || this;
        if (!url) {
            throw new Error("Failed to construct 'WebSocket': The URL '" + url + "' is invalid.");
        }
        _this._uri = URI.create(_this._url);
        _this._schema = (_a = _this._uri.getScheme()) !== null && _a !== void 0 ? _a : 'ws';
        if (["wss", "ws"].indexOf(_this._schema) == -1) {
            throw new Error("Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '" + _this._schema + "' is not allowed.");
        }
        _this._host = _this._uri.getHost();
        if (!_this._host) {
            throw new Error("Failed to construct 'WebSocket': The Host '" + _this._host + "' is invalid.");
        }
        _this._port = _this._uri.getPort();
        if (_this._port == -1) {
            if (_this._schema == "wss") {
                _this._port = 443;
            }
            else if (_this._schema == "ws") {
                _this._port = 80;
            }
        }
        return _this;
    }
    NettyWebSocket.prototype.getId = function () {
        var _a, _b;
        if ((_a = this.channel) === null || _a === void 0 ? void 0 : _a.id) {
            return ((_b = this.channel) === null || _b === void 0 ? void 0 : _b.id()) + '';
        }
        return 'NettyWebSocket#' + channelCount.incrementAndGet();
    };
    NettyWebSocket.prototype.doConnect = function () {
        var e_1, _a;
        var _this = this;
        var uri = URI.create(this._url);
        var headers = new DefaultHttpHeaders();
        try {
            for (var _b = __values(Object.getOwnPropertyNames(this._headers || {})), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                headers.add(key, this._headers[key]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Connect with V13 (RFC 6455 aka HyBi-17). You can change it to V08 or V00.
        // If you change it to V00, ping is not supported and remember to change
        // HttpResponseDecoder to WebSocketHttpResponseDecoder in the pipeline.
        var handler = new WebSocketClientHandler(WebSocketClientHandshakerFactory
            .newHandshaker(uri, WebSocketVersion.V13, null, false, headers), this);
        this.b = new Bootstrap();
        this.b.group(group)
            .channel(socketChannelClass)
            .handler(new ChannelInitializer({
            initChannel: function (ch) {
                var pipeline = ch.pipeline();
                if (_this._schema == "wss") {
                    if (SslContextBuilder) {
                        var sslCtx = SslContextBuilder.forClient().trustManager(InsecureTrustManagerFactory.INSTANCE).build();
                        pipeline.addLast(sslCtx.newHandler(ch.alloc(), _this._host, _this._port));
                    }
                    else {
                        var sslEngine = SSLContext.getDefault().createSSLEngine();
                        sslEngine.setUseClientMode(true);
                        pipeline.addLast("ssl", new SslHandler(sslEngine));
                    }
                }
                pipeline.addLast("http-codec", new HttpClientCodec());
                pipeline.addLast("aggregator", new HttpObjectAggregator(65536));
                pipeline.addLast("websocket", handler.getHandler());
            }
        }));
        this.b.connect(this._host, this._port).addListener(new ChannelFutureListener(function (future) {
            try {
                _this.channel = future.sync().channel();
                _this.onconnection({});
                handler.handshakeFuture.addListener(new ChannelFutureListener(function (future) {
                    try {
                        future.sync();
                        // only trigger onconnect when not have error
                        _this.onconnect({});
                    }
                    catch (error) {
                        error.printStackTrace();
                        // ignore error exceptionCaught from handler
                        // this.onerror({ error })
                    }
                }));
            }
            catch (error) {
                error.printStackTrace();
                _this.onerror({ error: error });
            }
        }));
    };
    NettyWebSocket.prototype.doSend = function (text) {
        this.channel.writeAndFlush(new TextWebSocketFrame(text));
    };
    NettyWebSocket.prototype.doClose = function (code, reason) {
        this.channel.writeAndFlush(new CloseWebSocketFrame());
        this.channel.close();
        this.channel.closeFuture().addListener(new ChannelFutureListener(function () { }));
    };
    NettyWebSocket.prototype.getChannel = function () {
        return this.channel;
    };
    return NettyWebSocket;
}(Transport));

var WebSocket = /** @class */ (function (_super) {
    __extends(WebSocket, _super);
    function WebSocket(url, subProtocol, headers) {
        if (subProtocol === void 0) { subProtocol = ''; }
        if (headers === void 0) { headers = {}; }
        var _this = _super.call(this) || this;
        _this._headers = {};
        _this._url = url;
        _this._headers = headers;
        _this.client = new NettyWebSocket(url, subProtocol, headers);
        _this.client.on('open', function (event) {
            var _a;
            (_a = _this.onopen) === null || _a === void 0 ? void 0 : _a.call(_this, event);
        });
        _this.client.on('message', function (event) { var _a; return (_a = _this.onmessage) === null || _a === void 0 ? void 0 : _a.call(_this, event); });
        _this.client.on('close', function (event) {
            var _a;
            (_a = _this.onclose) === null || _a === void 0 ? void 0 : _a.call(_this, event);
        });
        _this.client.on('error', function (event) { var _a; return (_a = _this.onerror) === null || _a === void 0 ? void 0 : _a.call(_this, event); });
        setTimeout(function () { return _this.client.connect(); }, 20);
        return _this;
    }
    WebSocket.prototype.connect = function () {
        this.client.connect();
    };
    Object.defineProperty(WebSocket.prototype, "id", {
        get: function () {
            return this.client.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebSocket.prototype, "bufferedAmount", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebSocket.prototype, "extensions", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebSocket.prototype, "protocol", {
        get: function () {
            return this.client.protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebSocket.prototype, "readyState", {
        get: function () {
            return this.client.readyStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebSocket.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    WebSocket.prototype.addEventListener = function (event, callback) {
        this["on".concat(event.toLowerCase())] = callback;
        this.client.on(event, callback);
    };
    WebSocket.prototype.send = function (data) {
        this.client.send(data);
    };
    WebSocket.prototype.close = function (code, reason) {
        this.client.close(code, reason);
        this.removeAllListeners();
    };
    WebSocket.CONNECTING = 0;
    WebSocket.OPEN = 1;
    WebSocket.CLOSING = 2;
    WebSocket.CLOSED = 3;
    return WebSocket;
}(EventEmitter));

/// <reference types="@ccms/nashorn" />

exports.WebSocket = WebSocket;
//# sourceMappingURL=WebSocket.js.map
