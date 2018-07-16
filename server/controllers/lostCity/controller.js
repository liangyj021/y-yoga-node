const LostCityList = require('../../common/mongoose').LostCityList;
const LostDataData = require('./data')

const LostCityController = {
  currentGames: [],
  getGameById(roomId) {
    let gameArr = this.currentGames.filter(i=>i.roomId==roomId)
    if (gameArr.length > 0) {
      return gameArr[0]
    } else {
      return new Promist((res, rej) => {
        LostCityList.findById(roomId).exec((err, data) => {
          if (err) {
            res({code: 0, msg: "error"})
          }
          if (data) {
            this.currentGames.push(data)
            res(data)
          } else {
            res({code: 0, msg: "no game"})
          }
        })
      })
    }
  },
  startGame(playerId1, playerId2) {
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
      if (!playerId2) {
        res({ code: 0, msg: 'waiting' })
        return;
      }
      LostCityList.find({$or: [{player1: playerId1}, {player2: playerId1}, {player1: playerId2}, {player2: playerId2}]}, (err, datas) => {
        if (err) {
          return res({ code: 0, msg: 'error' })
        }
        if (datas.length==0) {
          return cb(new LostDataData())
        }
        if (datas.length > 1) {
          return res({ code: 0, msg: "Reset All?"})
        }
        if ((datas[0].player1==playerId1&&datas[0].player2==playerId2) || (datas[0].player2==playerId1&&datas[0].player1==playerId2)) {
          datas[0].roomId = datas[0]._id
          return res(datas[0])
        } else {
          return res({ code: 0, msg: "Reset All?"})
        }
      })
    })
  },
  playCard() {
    
  },
  dropCard() {

  },
  pickCard() {

  },
  getActionDesc() {

  },
  getScroes() {

  },
  resetGameByPlayerId() {

  },
  resetGameById() {

  },
  resetGame(gameIds) {
    for (let index = this.currentGames.length-1; index >=0; index--) {
      if (gameIds.indexOf(this.currentGames[index].roomId)>-1) {
        this.currentGames.splice(index, 1)
      }
    }
    LostCityList.remove({$or: gameIds.map(_id => ({_id}))}, (err, datas) => {
      if (err) {
        return res({code: 0, msg: "error"})
      }
      return res({code: 1})
    })
  },
}

module.exports = LostCityController