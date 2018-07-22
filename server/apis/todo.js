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
  let update = new Todo({
    title: req.body.title,
    type: req.body.type,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt || req.body.createdAt,
  });
  let query = {_id: req.body._id || newId()};
  let options = {upsert: true, new: true};

  Todo.findOneAndUpdate(query, update, options, function (err, doc) {
    if (err) return console.error(err);
    let data = {todos: doc};
    res.statusCode = 200
    return res.send(doc);
  });
})

router.get('/getlist', function(req, res) {
  Todo.find({}, function (err, datas) {
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

module.exports = router;
