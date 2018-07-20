var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // _id: ObjectId,
  name: String,
  description: String,
  imgId: { type: Schema.Types.ObjectId, ref: 'filelist' },
  authorId: String,
  tags: Array,
  albumId: { type: Schema.Types.ObjectId, ref: 'album' },
  createdAt: Number,
  updatedAt: Number,
}, {collection: 'photo'})
