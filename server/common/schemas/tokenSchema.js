var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  token: String,
  userId: String,
  userName: String,
}, {collection: 'tokenlist'})