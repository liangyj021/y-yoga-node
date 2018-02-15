"use strict"
let express = require('express');
let router = express.Router();
let todo = require('./todo')
let game = require('./game')

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
router.use('/game', game)

module.exports = router;
