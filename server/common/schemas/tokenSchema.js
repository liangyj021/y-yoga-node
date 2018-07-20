var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  token: String,
  userId: { type: Schema.Types.ObjectId, ref: 'userlist' },
  userName: String,
}, {collection: 'tokenlist'})