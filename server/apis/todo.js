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
    type: req.body.type
  });
  let query = {_id: req.body._id || newId()};  // 这里要改！默认查询条件写啥啊？？？
  let options = {upsert: true, new: true};
  
  Todolist.findOneAndUpdate(query, update, options, function (err, doc) {
    if (err) return console.error(err);
    let data = {todos: doc};
    res.statusCode = 200
    return res.send(doc);
  });
})

/* GET home page. */
router.get('/getlist', function(req, res) {
  // 求助～～不知道这里为什么查询 的是是todolists这个表，然而创建的是todolist
  Todolist.find({}, function (err, kittens) {
    if (err) return console.error(err);
    let data = {todos: kittens};
    res.statusCode = 200
    return res.send(data);
  })
});

module.exports = router;
