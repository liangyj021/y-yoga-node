let GameList = require('../../controllers/lostCity/data.js')
const LostCity = {
  control(data, socket) {
    switch (data.type) {
      case 'joinRoom':

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
  type 'joinRoom'

  type 'playCard'

  type 'dropCard'

  type 'pickCard'

  type 'score'

  type 'reset'

  type 'resetAggred'
}

*/
