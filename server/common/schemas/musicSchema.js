var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // _id: ObjectId,
  name: String,
  author: String,
  url: String,
  tags: [{type: Schema.Types.ObjectId, ref: 'tag'}],
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now},
}, {collection: 'music'})
