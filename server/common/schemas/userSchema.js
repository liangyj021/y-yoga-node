var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  name: String,
  password: String,
  admin: Boolean,
  email: String,
  // socket_id: String,
  lastLoginAt: {type: Date},
  createdAt: { type: Date, default: Date.now},
}, {collection: 'user'})