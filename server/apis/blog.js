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
  BlogList.find(reqParams, (err, datas) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(datas)
  })
})
router.get('/hotlist', function(req, res, next) {
  BlogList.find({is_hot: true}, (err, datas) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(datas)
  })
})

router.post('/save', function(req, res, next) {
  let blog = req.body;
  if (blog._id) {
    BlogList.findOneAndUpdate({_id: blog._id}, blog, {new: true}, (err, data) => {
      if (err) {
        res.statusCode = 500;
        return res.send({})
      }
      res.statusCode = 200;
      return res.send(data)
    })
  } else {
    BlogList.create(blog, (err, data) => {
      if (err) {
        res.statusCode = 500;
        return res.send({})
      }
      res.statusCode = 200;
      return res.send(data)
    })
  }
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
