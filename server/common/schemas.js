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
const baseListSchema = require('./schemas/baseListSchema')
const fileListSchema = require('./schemas/fileListSchema')
const albumSchema = require('./schemas/albumSchema')
const photoSchema = require('./schemas/photoSchema')

module.exports = {
  todoSchema,
  blogSchema,
  blogTagSchema,
  userSchema,
  tokenSchema,
  keywordsSchema,
  lostCitySchema,
  baseListSchema,
  fileListSchema,
  albumSchema,
  photoSchema,
}
