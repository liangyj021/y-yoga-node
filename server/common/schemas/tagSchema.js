var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // id: Number,
  title: String,
  key: Number,
  type: String,
}, {collection: 'tag'})