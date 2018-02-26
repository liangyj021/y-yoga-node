var mongoose = require('mongoose');
var schemas = require('./schemas')

mongoose.connect('mongodb://localhost/young');
var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log("mongodb connected!")
});
mongoose.set('debug', true);

module.exports = {
  Todolist:  mongoose.model('Todolist', schemas.todoSchema),
  Userlist: mongoose.model('Userlist', schemas.userSchema),
  Tokenlist: mongoose.model('Tokenlist', schemas.tokenSchema),
}
