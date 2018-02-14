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
      socket.on('join-room', name => {
        this.joinRoom(socket, name)
      })
    })
  },
  emit(s, e, data) {
    s.emit(e, data)
  },
  emitTo(s, id, e, data) {
    s.to(id).emit(e, data)
  },
  joinRoom(s, name) {
    s.join(name, () => {

    })
  },
  leaveRoom(s, name) {
    s.leave(name)
  }
}


module.exports = Socket
// exports Socket;
