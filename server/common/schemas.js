var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const schemas = {
  todoSchema: Schema({
    // _id: ObjectId,
    title: String,
    id: Number,
    type: String,
    createdAt: Number,
    updatedAt: Number,
  }, {collection: 'todolist'}),
  blogSchema: Schema({
    // id: Number,
    title: String,
    content: String,
    brief: String,
    ibrief: String,
    author: String,
    authorId: String,
    author_id: String,
    tags: [Number],
    isHot: Boolean,
    createdAt: Number,
    updatedAt: Number,
  }, {collection: 'bloglist', versionKey: false}),
  blogTagSchema: Schema({
    // id: Number,
    title: String,
    key: Number,
  }, {collection: 'blogtag'}),
  userSchema: Schema({
    // id: Number,
    name: String,
    password: String,
    isAdmin: Boolean,
    // socket_id: String,
    lastLoginAt: Number,
    createdAt: Number,
  }, {collection: 'userlist'}),
  tokenSchema: Schema({
    token: String,
    userId: String,
    userName: String,
  }, {collection: 'tokenlist'}),
  keywordsSchema: Schema({
    key: String,
    type: String,
    words: [String],
  }, {collection: 'keywordslist'}),
}

module.exports = schemas
