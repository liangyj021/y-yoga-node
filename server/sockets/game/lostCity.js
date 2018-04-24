let Controller = require('../../controllers/lostCity/controller')
// let GameList = require('../../controllers/lostCity/data.js')
const LostCity = {
  control: async function(data, socket) {
    switch (data.type) {
      case 'startGame': 
        let gameData = await Controller.startGame(socket.id, data.partnerId)
        return gameData
        break;
      case 'playCard':
        
        break;
      case 'dropCard':

        break;
      case 'pickCard':

        break;
      case 'score':

        break;
      case 'reset':

        break;
      case 'resetAggred':

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
