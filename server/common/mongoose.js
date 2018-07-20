var mongoose = require('mongoose');
var schemas = require('./schemas')

mongoose.connect('mongodb://localhost/young');
var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log("mongodb connected!")
});

module.exports = {
  newId: mongoose.mongo.ObjectID,
  Todolist:  mongoose.model('todolist', schemas.todoSchema),
  Userlist: mongoose.model('userlist', schemas.userSchema),
  Tokenlist: mongoose.model('tokenlist', schemas.tokenSchema),
  BlogList: mongoose.model('bloglist', schemas.blogSchema),
  BlogTagList: mongoose.model('blogtag', schemas.blogTagSchema),
  KeywordsList: mongoose.model('keywordslist', schemas.keywordsSchema),
  LostCityList: mongoose.model('lostcitylist', schemas.lostCitySchema),
  BaseList: mongoose.model('baselist', schemas.baseListSchema),
  FileList: mongoose.model('filelist', schemas.fileListSchema),
  Album: mongoose.model('album', schemas.albumSchema),
  Photo: mongoose.model('photo', schemas.photoSchema),
}
