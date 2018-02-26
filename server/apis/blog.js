"use strict"
let express = require('express');
let router = express.Router();

router.get('*', function(req, res, next) {
  next()
})
router.post('*', function(req, res, next) {
  next()
})

router.post('/category', function(req, res, next) {
  let category = [
    {id: 1, name: "category-a"},
    {id: 2, name: "category-b"},
    {id: 3, name: "category-c"},
  ]
  console.log(req.user)
  res.statusCode = 200;
  return res.send(category)
})

router.post('/list', function(req, res, next) {
  let reqParams = req.body;
  let list = [
    {id: 1, title: "blog-aaaa", content: "hello world 123", updatedAt: "2018-1-1"},
    {id: 2, title: "blog-bbbb", content: "aldsjfl hello world 123", updatedAt: "2018-1-1"},
    {id: 3, title: "blog-cccc", content: "salvjxzl laldsjfl hello world 123", updatedAt: "2018-1-1"},
  ]
  res.statusCode = 200;
  return res.send(list)
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
  let blog = {
    id, title: "blog-test", content: "test \n blog \n helloworld", updatedAt: "2018-2-22", categoryId: 1
  }
  res.statusCode = 200
  return res.send(blog);
})

module.exports = router;
