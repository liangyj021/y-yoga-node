var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  key: String,
  type: String,
  words: [String],
}, {collection: 'keyword'})