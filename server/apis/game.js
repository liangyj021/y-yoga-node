"use strict"
let express = require('express');
let router = express.Router();
let lostCity = require('./games/lostCity')

router.get('*', function(req, res, next) {
  next()
})
router.post('*', function(req, res, next) {
  next()
})

router.use('/lostCity', lostCity)

module.exports = router;
