let GameControl = require('./game/index.js')

const Socket = (socket) => {
  socket.emit('open', {connected: true});//通知客户端已连接
  socket.on('otherEvent', (data) => {
    console.log(data);
  })
  socket.on('join-room', name => {
    joinRoom(socket, name)
  })
  socket.on('joinGameRoom', name => {
    joinRoom(socket, name)
  })
  socket.on('game-info', data => {
    GameControl.control(data, socket)
  })
}
const emit = (s, e, data) => {
  s.emit(e, data)
}
const emitTo = (s, id, e, data) => {
  s.to(id).emit(e, data)
}
const joinRoom = (s, name) => {
  s.join(name, () => {
    s.emit('message', {joinRoom: 'success'})
  })
}
const leaveRoom = (s, name) => {
  s.leave(name)
}

module.exports = Socket
// exports Socket;
