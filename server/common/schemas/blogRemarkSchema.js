var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  blog: { type: Schema.Types.ObjectId, ref: 'blog' },
  author: { type: Schema.Types.ObjectId, ref: 'user' },
  replayRemark: { type: Schema.Types.ObjectId, ref: 'blogremark' },
  content: String,
  createdAt: { type: Date, default: Date.now},
}, {collection: 'blogremark', versionKey: false})