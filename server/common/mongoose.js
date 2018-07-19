var mongoose = require('mongoose');
var schemas = require('./schemas')

mongoose.connect('mongodb://localhost/young');
var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log("mongodb connected!")
});
// mongoose.set('debug', true);

module.exports = {
  newId: mongoose.mongo.ObjectID,
  Todolist:  mongoose.model('Todolist', schemas.todoSchema),
  Userlist: mongoose.model('Userlist', schemas.userSchema),
  Tokenlist: mongoose.model('Tokenlist', schemas.tokenSchema),
  BlogList: mongoose.model('BlogList', schemas.blogSchema),
  BlogTagList: mongoose.model('BlogTagList', schemas.blogTagSchema),
  KeywordsList: mongoose.model('KeywordsList', schemas.keywordsSchema),
  LostCityList: mongoose.model('LostCityList', schemas.lostCitySchema),
  BaseList: mongoose.model('BaseList', schemas.baseListSchema),
  FileList: mongoose.model('FileList', schemas.fileListSchema),
  Album: mongoose.model('Album', schemas.albumSchema),
  Photo: mongoose.model('Photo', schemas.photoSchema),
}
