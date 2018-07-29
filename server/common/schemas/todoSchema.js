var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // _id: ObjectId,
  title: String,
  type: String,
  author: { type: Schema.Types.ObjectId, ref: 'user' },
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now},
}, {collection: 'todo'})