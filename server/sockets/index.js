let io = {};

let Socket = {
  initServer(server) {
    io = require('socket.io').listen(server)
    this.listen()
  },
  listen() {
    io.on('connection', function (socket) {
      console.log("get connected");
      socket.emit('open', {test: true});//通知客户端已连接
      socket.on('otherEvent', (data) => {
        console.log(data);
      })
    })
    io.on('joinGameRoom', function(a, b) {
      console.log(a, b);
    })
  }
}


module.exports = Socket
// exports Socket;
