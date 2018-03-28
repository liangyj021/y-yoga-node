"use strict"
let express = require('express');
let router = express.Router();
let KeywordsList = require('../common/mongoose').KeywordsList;

router.get('*', function(req, res, next) {
  console.log("keywords request");
  next()
})
router.post('*', function(req, res, next) {
  console.log("keywords request");
  next()
})

router.get('/us', function(req, res, next) {
  let keyword = req.query.keyword;
  if (!keyword) {
    res.statusCode = 200;
    return res.send({})
  }
  KeywordsList.findOne({type: 'us', name: keyword}, (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(data)
  })
})

router.get('/youngCircle', function(req, res, next) {
  KeywordsList.find({type: 'youngCircle'}, (err, datas) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(datas)
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
