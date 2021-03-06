import { EventEmitter } from '../events'
import { WebSocket } from './index'
import { CloseEvent, ErrorEvent, Event, MessageEvent, WebSocketHeader } from './interface'

export abstract class Transport extends EventEmitter {
    protected _url: string
    protected _state: number = WebSocket.CONNECTING
    protected _protocol: string
    protected _headers: WebSocketHeader = {}

    constructor(uri: string, subProtocol: string = '', headers: WebSocketHeader = {}) {
        super()
        this._url = uri
        this._protocol = subProtocol
        this._headers = headers
    }

    get id() {
        return this.getId()
    }

    get protocol() {
        return this._protocol
    }

    get readyStatus() {
        return this._state
    }

    set readyStatus(state: number) {
        this._state = state
    }

    connect() {
        try {
            this.doConnect()
        } catch (error: any) {
            this.onerror({ error })
        }
    }

    send(text: string) {
        try {
            this.doSend(text)
        } catch (error: any) {
            this.onerror({ error })
        }
    }

    close(code: number = 0, reason: string = '') {
        if (this.readyStatus != WebSocket.CLOSING && this.readyStatus != WebSocket.CLOSED) {
            this.readyStatus = WebSocket.CLOSING
            try {
                this.onclose({ code, reason })
                this.doClose(code, reason)
            } catch (error: any) {
                this.onerror({ error })
            } finally {
                this.removeAllListeners()
            }
        } else {
        }
    }

    onconnection(event: Event) {
        this._state == WebSocket.CONNECTING
        this.emit('connecting', event)
    }

    onconnect(event: Event) {
        if (this.readyStatus != WebSocket.OPEN) {
            this.readyStatus = WebSocket.OPEN
            this.emit('open', event)
        } else {
        }
    }

    onmessage(event: MessageEvent) {
        this.emit('message', event)
    }

    onerror(event: ErrorEvent) {
        this.emit('error', event)
    }

    onclose(event: CloseEvent) {
        if (this.readyStatus != WebSocket.CLOSED) {
            this.readyStatus = WebSocket.CLOSED
            this.emit('close', event)
            this.removeAllListeners()
        } else {
        }
    }
    abstract getId()
    abstract doConnect()
    abstract doSend(text: string)
    abstract doClose(code: number, reason: string)
}
