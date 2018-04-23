const LostCityList = require('../../common/mongoose').LostCityList;
const LostDataData = require('./data')

const LostCityController = {
  joinRoom(playerId1, playerId2) {
    return new Promise((res, rej) => {
      let cb = (lostCityData) => {
        let data = {
          publicPile: lostCityData._AllCards.publicPile,
          player1Hand: lostCityData._AllCards.player1Hand,
          player1PlacePile: lostCityData._AllCards.player1PlacePile,
          discardPile: lostCityData._AllCards.discardPile,
          player2Hand: lostCityData._AllCards.player2Hand,
          player2PlacePile: lostCityData._AllCards.player2PlacePile,
          currentPlayer: lostCityData._AllCards.currentPlayer,
          currentStage: lostCityData._AllCards.currentStage,
          player1: playerId1,
          player2: playerId2,
        }
        LostCityList.insertMany([data], (error, docs) => {
          if (error) {
            res({code: 0, msg: 'error'})
          }
          lostCityData.setRoomId(docs[0]._id);
          res(lostCityData)
        })
      }
      LostCityList.findOne({$or: [{player1: playerId1}, {player2: playerId1}]}, (err, data) => {
        if (err) {
          res({ code: 0, msg: 'error' })
        }
        if (!playerId2) {
          res({ code: 0, msg: 'waiting' })
        }
        if (!data||!data.id) {
          cb(new LostDataData())
        }
        if (data.player2!=playerId2) {
          res({ code: 0, msg: 'reset game?' })
        }
        if (data.player2 == playerId2) {
          data.roomId = data._id
          res( LostDataData(data) )
        }
      })
    })
  }
}

module.exports = LostCityController