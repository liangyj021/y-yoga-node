var mongoose = require('mongoose');

const schemas = {
  todoSchema : mongoose.Schema({
    title: String,
    id: Number,
    type: String
  }, {collection: 'todolist'})
}

module.exports = schemas
