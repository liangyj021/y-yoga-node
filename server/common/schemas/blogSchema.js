var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  title: String,
  content: String,
  brief: String,
  author: { type: Schema.Types.ObjectId, ref: 'user' },
  tags: [{type: Schema.Types.ObjectId, ref: 'tag'}],
  hot: Boolean,
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now},
}, {collection: 'blog', versionKey: false})