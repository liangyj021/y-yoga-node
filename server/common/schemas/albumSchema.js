var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = Schema({
  // _id: ObjectId,
  name: String,
  description: String,
  imgId: { type: Schema.Types.ObjectId, ref: 'filelist' },
  createdAt: Date,
  updatedAt: Date,
}, {collection: 'album'})