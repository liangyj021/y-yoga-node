var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // id: Number,
  key: String,
  value: String,
}, {collection: 'baselist', versionKey: false})