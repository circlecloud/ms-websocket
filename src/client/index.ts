
import { EventEmitter } from '../events'
import { Transport } from './transport'
import { ClientEvent, CloseEvent, ErrorEvent, Event, EventType, MessageEvent, WebSocketHeader } from './interface'

import { NettyWebSocket } from './netty'
import * as exp from 'constants'

declare global {
    export namespace WebSocket {
        const CONNECTING: number
        const OPEN: number
        const CLOSING: number
        const CLOSED: number
    }
}

export class WebSocket extends EventEmitter {
    public static CONNECTING = 0
    public static OPEN = 1
    public static CLOSING = 2
    public static CLOSED = 3
    public binaryType: 'blob' | 'arraybuffer'

    protected _url: string
    protected _headers: WebSocketHeader = {}

    private client: Transport

    constructor(url: string, subProtocol: string = '', headers: WebSocketHeader = {}) {
        super()
        this._url = url
        this._headers = headers
        this.client = new NettyWebSocket(url, subProtocol, headers)
        this.client.on(ClientEvent.open, (event) => this.onopen?.(event))
        this.client.on(ClientEvent.message, (event) => this.onmessage?.(event))
        this.client.on(ClientEvent.close, (event) => this.onclose?.(event))
        this.client.on(ClientEvent.error, (event) => this.onerror?.(event))
        this.on = this.client.on.bind(this.client)
        this.emit = this.client.emit.bind(this.client)
    }
    connect() {
        this.client.connect()
    }
    get id() {
        return this.client.id
    }
    get bufferedAmount() {
        throw new Error("Method not implemented.")
    }
    get extensions() {
        throw new Error("Method not implemented.")
    }
    get protocol() {
        return this.client.protocol
    }
    get readyState() {
        return this.client.readyState
    }
    get url() {
        return this._url
    }

    public onopen: (event: Event) => void
    public onmessage: (event: MessageEvent) => void
    public onclose: (event: CloseEvent) => void
    public onerror: (event: ErrorEvent) => void

    public send(data: any) {
        return this.client.send(data)
    }

    public close(code?: number, reason?: string) {
        return this.client.close(code, reason)
    }
}

if (global && !global.WebSocket) {
    global.WebSocket = WebSocket
}
