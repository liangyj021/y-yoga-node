var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // id: Number,
  key: String,
  filename: String,
  type: String,
  domain: String,
}, {collection: 'filelist'})

// 文件路由 http:// + domain + '/' + key