// TODO: Mongoose 优化
var mongoose = require('mongoose');

const todoSchema = require('./schemas/todoSchema')
const blogSchema = require('./schemas/blogSchema')
const blogRemarkSchema = require('./schemas/blogRemarkSchema')
const tagSchema = require('./schemas/tagSchema')
const userSchema = require('./schemas/userSchema')
const tokenSchema = require('./schemas/tokenSchema')
const keywordSchema = require('./schemas/keywordSchema')
const lostCitySchema = require('./schemas/lostCitySchema')
const baseDataSchema = require('./schemas/baseDataSchema')
const fileSchema = require('./schemas/fileSchema')
const albumSchema = require('./schemas/albumSchema')
const photoSchema = require('./schemas/photoSchema')
const musicSchema = require('./schemas/musicSchema')

mongoose.connect('mongodb://localhost:27017/young', {autoReconnect: true});
var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log("mongodb connected!")
});

module.exports = {
  newId: mongoose.mongo.ObjectID,
  Todo:  mongoose.model('todo', todoSchema),
  User: mongoose.model('user', userSchema),
  Token: mongoose.model('token', tokenSchema),
  Blog: mongoose.model('blog', blogSchema),
  BlogRemark: mongoose.model('blogremark', blogRemarkSchema),
  Tag: mongoose.model('tag', tagSchema),
  Keyword: mongoose.model('keyword', keywordSchema),
  LostCity: mongoose.model('lostcity', lostCitySchema),
  BaseData: mongoose.model('basedata', baseDataSchema),
  File: mongoose.model('file', fileSchema),
  Album: mongoose.model('album', albumSchema),
  Photo: mongoose.model('photo', photoSchema),
  Music: mongoose.model('music', musicSchema),
}
