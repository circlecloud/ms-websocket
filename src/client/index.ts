
import { EventEmitter } from '../events'
import { Transport } from './transport'
import { CloseEvent, ErrorEvent, Event, EventType, MessageEvent, WebSocketHeader } from './interface'

import { NettyWebSocket } from './netty'

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
        this.client.on('open', (event) => {
            this.onopen?.(event)
        })
        this.client.on('message', (event) => this.onmessage?.(event))
        this.client.on('close', (event) => {
            this.onclose?.(event)
        })
        this.client.on('error', (event) => this.onerror?.(event))
        setTimeout(() => this.client.connect(), 20)
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
        return this.client.readyStatus
    }
    get url() {
        return this._url
    }
    public onopen: (event: Event) => void
    public onmessage: (event: MessageEvent) => void
    public onclose: (event: CloseEvent) => void
    public onerror: (event: ErrorEvent) => void

    addEventListener(event: EventType, callback: () => void) {
        this[`on${event.toLowerCase()}`] = callback
        this.client.on(event, callback)
    }
    public send(data: any) {
        this.client.send(data)
    }
    public close(code?: number, reason?: string) {
        this.client.close(code, reason)
        this.removeAllListeners()
    }
}
