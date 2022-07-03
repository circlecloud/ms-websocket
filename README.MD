## MS-WEBSOCKET

A WebSocket Client based on Netty that can run on Nashorn

### Usage

1. create Nashron ScriptEngine
2. load WebSocket

```java
ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
// if you got ReferenceError: "exports" is not defined in <eval> at line number 3
// you can eval this code
// enigne.eval("if (!this.exports) { this.exports = {}; }");
// load WebSocket
engine.eval("var WebSocket = load('https://raw.githubusercontent.com/circlecloud/ms-websocket/master/dist/WebSocket.js')");
```

3. use WebSocket

```js
// then you can use WebSocket at engine
var ws = new WebSocket("wss://127.0.0.1:3000");
ws.onopen = function () {
  print("onopen");
};
ws.onmessage = function (event) {
  print(JSON.stringify(event));
};
ws.onclose = function (event) {
  print(JSON.stringify(event));
};
ws.onerror = function (event) {
  print(JSON.stringify(event));
};
```
