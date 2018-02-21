"use strict"
let express = require('express');
let router = express.Router();
let Todolist = require('../common/mongoose').Todolist;

router.get('*', function(req, res, next) {
  console.log(req.url, 'todo');
  next();
  // console.log(req);
})
router.post('*', function(req, res, next) {
  // console.log(req);
  next()
})

router.post('/create', (req, res, next) => {
  console.log(req)
  var fluffy = new Todolist({
    title: req.body.id,
    title: req.body.title,
    type: req.body.type
  });
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    console.log(fluffy)
  });
})

/* GET home page. */
router.get('/getlist', function(req, res) {
  // 求助～～不知道这里为什么查询 的是是todolists这个表，然而创建的是todolist
  Todolist.find({}, function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens)
    let data = {todos: kittens};
    res.statusCode = 200
    return res.send(data);
  })
});

module.exports = router;
