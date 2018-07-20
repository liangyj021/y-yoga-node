var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  publicPile: [Number],
  player1Hand: [Number],
  player1PlacePile: [Number],
  discardPile: [Number],
  player2Hand: [Number],
  player2PlacePile: [Number],
  currentPlayer: Number,
  currentStage: Number,
  player1: { type: Schema.Types.ObjectId, ref: 'userlist' },
  player2: { type: Schema.Types.ObjectId, ref: 'userlist' },
}, {collection: 'lostcitylist'})