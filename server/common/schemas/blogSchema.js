var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  title: String,
  content: String,
  brief: String,
  author: { type: Schema.Types.ObjectId, ref: 'user' },
  tags: [{type: Schema.Types.ObjectId, ref: 'tag'}],
  hot: Boolean,
  createdAt: Number,
  updatedAt: Number,
}, {collection: 'blog', versionKey: false})