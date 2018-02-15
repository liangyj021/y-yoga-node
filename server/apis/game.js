"use strict"
let express = require('express');
let router = express.Router();
let lostCity = require('./games/lostCity')

console.log(123);
router.get('*', function(req, res, next) {
  // console.log(req.url, '***');
  next()
  // console.log(req);
})
router.post('*', function(req, res, next) {
  // console.log(req);
  console.log(req.url, 'game');

  next()
})

router.use('/lostCity', lostCity)

module.exports = router;
