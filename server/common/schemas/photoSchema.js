var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // _id: ObjectId,
  name: String,
  description: String,
  imgId: String,
  authorId: String,
  tags: Array,
  albumId: String,
  createdAt: Number,
  updatedAt: Number,
}, {collection: 'photo'})
