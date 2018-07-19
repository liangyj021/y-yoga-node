var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // _id: ObjectId,
  id: Number,
  name: String,
  description: String,
  imgUrl: String,
  createdAt: Date,
  updatedAt: Date,
}, {collection: 'album'})