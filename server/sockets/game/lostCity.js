let Controller = require('../../controllers/lostCity/controller')
// let GameList = require('../../controllers/lostCity/data.js')
const LostCity = {
  control: async function(data, socket) {
    let gameData, actionDesc, scores, status
    switch (data.type) {
      case 'startGame': 
        gameData = await Controller.startGame(socket.id, data.partnerId)
        return {gameData}
        break;
      case 'playCard':
        gameData = await Controller.playCard(socket.id, data.cardId, data.gameId)
        actionDesc = await Controller.getActionDesc('playCard', socket.id, data.cardId)
        return {gameData, actionDesc}
        break;
        case 'dropCard':
        gameData = await Controller.dropCard(socket.id, data.cardId)
        actionDesc = await Controller.getActionDesc('dropCard', socket.id, data.cardId)
        return {gameData, actionDesc}
        break;
        case 'pickCard':
        gameData = await Controller.pickCard(socket.id, data.cardId)
        actionDesc = await Controller.getActionDesc('pickCard', data.cardId)
        return {gameData, actionDesc}
        break;
      case 'score':
        scores = await Controller.getScroes(data.gameId)
        return {scores}
        break;
      case 'reset':
        status = await Controller.resetGameByPlayerId(socket.id, data.partnerId)
        return {status}
        break;
      case 'resetAggred':
        status = await Controller.resetGameById(data.gameId)
        return {status}
        break;
      default:

    }
  }
}

module.exports = LostCity

/*

data {
  type 'startGame'

  type 'playCard'

  type 'dropCard'

  type 'pickCard'

  type 'score'

  type 'reset'

  type 'resetAggred'
}

*/
