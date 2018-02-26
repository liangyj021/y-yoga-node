var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const schemas = {
  todoSchema: Schema({
    _id: ObjectId,
    title: String,
    id: Number,
    type: String
  }, {collection: 'todolist'}),
  blogSchema: Schema({
    // id: Number,
    title: String,
    content: String,
    brief: String,
    author: String,
    author_id: String,
    tags: Array,
    is_hot: Boolean,
    created_at: String,
    updated_at: String
  }, {collection: 'bloglist'}),
  blogTagSchema: Schema({
    // id: Number,
    title: String
  }, {collection: 'blogtag'}),
  userSchema: Schema({
    // id: Number,
    name: String,
    password: String,
    is_admin: Boolean,
    // socket_id: String,
    last_login_at: String,
    created_at: String,
  }, {collection: 'userlist'}),
  tokenSchema: Schema({
    token: String,
    userId: String,
    userName: String,
  }, {collection: 'tokenlist'}),
}

module.exports = schemas
