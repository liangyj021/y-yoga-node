var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // _id: ObjectId,
  name: String,
  description: String,
  img: { type: Schema.Types.ObjectId, ref: 'file' },
  author: { type: Schema.Types.ObjectId, ref: 'user' },
  tags: [{type: Schema.Types.ObjectId, ref: 'tag'}],
  album: { type: Schema.Types.ObjectId, ref: 'album' },
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now},
}, {collection: 'photo'})
