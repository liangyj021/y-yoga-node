var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // id: Number,
  key: String,
  filename: String,
  type: String,
  url: String,
  domain: String,
}, {collection: 'file'})

// 文件路由 http:// + domain + '/' + key