"use strict"
let express = require('express');
let router = express.Router();
let BlogList = require('../common/mongoose').BlogList;
let BlogTagList = require('../common/mongoose').BlogTagList;

router.get('*', function(req, res, next) {
  next()
})
router.post('*', function(req, res, next) {
  next()
})

router.post('/category', function(req, res, next) {
  BlogTagList.find({}, (err, datas) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(datas)
  })
})

router.post('/list', function(req, res, next) {
  let reqParams = req.body;
  console.log(reqParams);
  BlogList.find({tags: reqParams.key}, (err, datas) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(datas)
  })
})
router.get('/hotlist', function(req, res, next) {
  let reqParams = req.body;
  let list = [
    {id: 1, title: "blog-aaaa", content: "hello world 123", updatedAt: "2018-1-1"},
    {id: 2, title: "blog-bbbb", content: "aldsjfl hello world 123", updatedAt: "2018-1-1"},
    {id: 3, title: "blog-cccc", content: "salvjxzl laldsjfl hello world 123", updatedAt: "2018-1-1"},
  ]
  res.statusCode = 200;
  return res.send(list)
})

router.post('/save', function(req, res, next) {
  let blog = req.body.blog;
})

router.get('/blog/:id', function(req, res, next) {
  let id = req.params.id
  BlogList.findOne({_id: id}, (err, datas) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(datas)
  })
})

module.exports = router;
