"use strict"
let express = require('express');
let router = express.Router();
let todo = require('./todo')

router.get('*', function(req, res, next) {
  console.log(req.url, '***');
  next()
  // console.log(req);
})
router.post('*', function(req, res, next) {
  // console.log(req);
  next()
})

router.use('/todo', todo)

// router.get('/todo/getlist', function(req, res, next) {
//   console.log(req.url, 'todoGetlist');
//   // res.sendStatus(200)
//   //
//   // res.send(a)
// });

module.exports = router;
