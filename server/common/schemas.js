var Schema = require('mongoose').Schema;

const schemas = {
  todoSchema: Schema({
    title: String,
    id: Number,
    type: String
  }, {collection: 'todolist'}),
  blogSchema: Schema({
    id: Number,
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
    id: Number,
    title: String
  }, {collection: 'blogtag'}),
  userSchema: Schema({
    id: Number,
    name: Number,
    is_admin: Boolean,
    socket_id: String,
    last_login_at: String,
    created_at: String
  }, {collection: 'userlist'})
}

module.exports = schemas
