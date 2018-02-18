let LostCity = require('./lostCity')

const GameControl = {
  control(data, socket) {
    if (data.type == 'lostCity') {
      this.lostCity(data.gameInfo, socket)
    }
  },
  lostcity(data, socket) {

  }
}

module.exports = GameControl
