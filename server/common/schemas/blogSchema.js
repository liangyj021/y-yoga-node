var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // id: Number,
  title: String,
  content: String,
  brief: String,
  ibrief: String,
  author: String,
  authorId: String,
  tags: [Number],
  isHot: Boolean,
  createdAt: Number,
  updatedAt: Number,
}, {collection: 'bloglist', versionKey: false})