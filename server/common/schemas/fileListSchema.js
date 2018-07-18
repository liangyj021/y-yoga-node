var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // id: Number,
  key: String,
  filename: String,
  type: String,
  domain: String,
}, {collection: 'filelist'})