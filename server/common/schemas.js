var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

const todoSchema = require('./schemas/todoSchema')
const blogSchema = require('./schemas/blogSchema')
const blogTagSchema = require('./schemas/blogTagSchema')
const userSchema = require('./schemas/userSchema')
const tokenSchema = require('./schemas/tokenSchema')
const keywordsSchema = require('./schemas/keywordsSchema')
const lostCitySchema = require('./schemas/lostCitySchema')

const schemas = {
  todoSchema: Schema(todoSchema, {collection: 'todolist'}),
  blogSchema: Schema(blogSchema, {collection: 'bloglist', versionKey: false}),
  blogTagSchema: Schema(blogTagSchema, {collection: 'blogtag'}),
  userSchema: Schema(userSchema, {collection: 'userlist'}),
  tokenSchema: Schema(tokenSchema, {collection: 'tokenlist'}),
  keywordsSchema: Schema(keywordsSchema, {collection: 'keywordslist'}),
  lostCitySchema: Schema(lostCitySchema, {collection: 'lostcitylist'}),
}

module.exports = schemas
