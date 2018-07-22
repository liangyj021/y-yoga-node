var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // _id: ObjectId,
  name: String,
  description: String,
  img: { type: Schema.Types.ObjectId, ref: 'file' },
  creator: { type: Schema.Types.ObjectId, ref: 'user'},
  createdAt: Date,
  updatedAt: Date,
}, {collection: 'album'})