var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = {
  gameType: String,
  userIds: [String],
  roomName: String,
}