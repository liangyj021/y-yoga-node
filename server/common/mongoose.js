var mongoose = require('mongoose');
var schemas = require('./schemas')

mongoose.connect('mongodb://localhost/young');
var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log("mongodb connected!")
});

// model
var Todolist = mongoose.model('Todolist', schemas.todoSchema);

module.exports = {
  Todolist
}
