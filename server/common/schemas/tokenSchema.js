var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  token: String,
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  userName: String,
}, {collection: 'token'})