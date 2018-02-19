let LostCity = require('./lostCity')

const GameControl = {
  control(data, socket) {
    if (data.type == 'lostCity') {
      this.lostCity(data.gameInfo, socket)
    }
  },
  lostcity(data, socket) {
    LostCity.control(data, socket)
  }
}

module.exports = GameControl
