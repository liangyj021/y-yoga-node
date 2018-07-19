var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // _id: ObjectId,
  id: Number,
  name: String,
  description: String,
  imgUrl: String,
  authorId: String,
  tags: Array,
  createdAt: Number,
  updatedAt: Number,
}, {collection: 'photo'})
