"use strict"
let express = require('express');
let router = express.Router();
let Keyword = require('../common/mongoose').Keyword;

router.get('*', function(req, res, next) {
  next()
})
router.post('*', function(req, res, next) {
  next()
})

router.get('/us', function(req, res, next) {
  let keyword = req.query.keyword;
  if (!keyword) {
    res.statusCode = 200;
    return res.send({})
  }
  Keyword.findOne({type: 'us', name: keyword}, (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(data)
  })
})

router.get('/youngCircle', function(req, res, next) {
  Keyword.find({type: 'youngCircle'}, (err, datas) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(datas)
  })
})

module.exports = router;
