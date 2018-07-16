var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // id: Number,
  name: String,
  password: String,
  isAdmin: Boolean,
  // socket_id: String,
  lastLoginAt: Number,
  createdAt: Number,
}, {collection: 'userlist'})