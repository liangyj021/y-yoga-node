"use strict"
let express = require('express');
let router = express.Router();
let BlogList = require('../common/mongoose').BlogList;
let BlogTagList = require('../common/mongoose').BlogTagList;
let newId =  require('../common/mongoose').newId;

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
  BlogList.findOneAndUpdate({_id: blog._id||newId()}, blog, {new: true, upsert: true}, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(data)
  })
})

router.get('/blog/:id', function(req, res, next) {
  let id = req.params.id
  BlogList.findOne({_id: id}, (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(data)
  })
})

module.exports = router;
