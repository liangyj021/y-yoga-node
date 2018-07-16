var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // _id: ObjectId,
  title: String,
  id: Number,
  type: String,
  createdAt: Number,
  updatedAt: Number,
}, {collection: 'todolist'})