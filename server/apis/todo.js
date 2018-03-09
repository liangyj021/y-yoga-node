"use strict"
let express = require('express');
let router = express.Router();
let Todolist = require('../common/mongoose').Todolist;
let newId =  require('../common/mongoose').newId;

router.get('*', function(req, res, next) {
  next();
  // console.log(req);
})
router.post('*', function(req, res, next) {
  // console.log(req);
  next()
})

router.post('/save', (req, res, next) => {
  let update = new Todolist({
    title: req.body.title,
    type: req.body.type,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt || req.body.createdAt,
  });
  let query = {_id: req.body._id || newId()};
  let options = {upsert: true, new: true};

  Todolist.findOneAndUpdate(query, update, options, function (err, doc) {
    if (err) return console.error(err);
    let data = {todos: doc};
    res.statusCode = 200
    return res.send(doc);
  });
})

router.get('/getlist', function(req, res) {
  Todolist.find({}, function (err, datas) {
    if (err) return console.error(err);
    let data = {todos: datas};
    res.statusCode = 200
    return res.send(data);
  })
});

router.get('/updateSQL', function(req, res) {
  Todolist.find({}, function (err, datas) {

  })
})

module.exports = router;
