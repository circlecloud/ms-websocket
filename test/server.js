const WebSocket = require('ws')

const WebSocketServer = WebSocket.Server

const wss = new WebSocketServer({
    port: 4040
})

wss.on('connection', function (/**@type any */ws, req) {
    ws.on('message', function (message) {
        let { action, data } = JSON.parse(message)
        switch (action) {
            case 'open':
                ws.send(JSON.stringify({ action: 'close', data: {} }))
                ws.close(1008, 'this server is already connected.')
        }
    })
    ws.on('close', (code, reason) => {
        console.log('close', code, reason.toString())
    })
    ws.on('error', (error) => {
        console.log('error', error)
    })
})
