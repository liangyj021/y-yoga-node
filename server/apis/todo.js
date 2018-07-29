"use strict"
let express = require('express');
let router = express.Router();
let Todo = require('../common/mongoose').Todo;
let newId =  require('../common/mongoose').newId;

router.get('*', function(req, res, next) {
  next();
})
router.post('*', function(req, res, next) {
  next()
})

router.post('/save', (req, res, next) => {
  let query = {_id: req.body._id || newId()};
  let todo = todoParse(req.body, req.user)
  let options = {upsert: true, new: true};
  Todo.findOneAndUpdate(query, todo, options, function (err, doc) {
    if (err) return console.error(err);
    let data = {todos: doc};
    res.statusCode = 200
    return res.send(doc);
  });
})

router.get('/getlist', function(req, res) {
  Todo
    .find({})
    .populate('creator', {_id: 1, name: 2, email: 3})
    .exec(function (err, datas) {
    if (err) return console.error(err);
    let data = {todos: datas};
    res.statusCode = 200
    return res.send(data);
  })
});

router.post('/deleteOne', function(req, res) {
  let todo = new Todo({_id: req.body._id})
  Todo.deleteOne(todo, function (err, datas) {
    if (err) return console.error(err);
    let data = {todos: datas};
    res.statusCode = 200
    return res.send(data);
  })
});

const todoParse = (todo, currentUser) => ({
  title: todo.title,
  type: todo.type,
  author: todo.author?todo.author._id:currentUser,
  createdAt: todo.createdAt||new Date().toISOString(),
  updatedAt: new Date().toISOString(),
})

module.exports = router;