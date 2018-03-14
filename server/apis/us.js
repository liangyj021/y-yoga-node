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

router.get('/baseInfo', function(req, res, next) {
  let
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
  blog.isHot = true
  setBrief(blog)
  console.log(blog);
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

// router.get('/updateSQL', function(req, res, next) {
//   updateSQL()
//   return;
// })
//
// const updateSQL = () => {
//   BlogList.find({}, (err, datas) => {
//
//   })
// }

module.exports = router;
