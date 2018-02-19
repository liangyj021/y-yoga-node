"use strict"
let express = require('express');
let router = express.Router();

router.get('*', function(req, res, next) {
  next();
})
router.post('*', function(req, res, next) {
  next()
})

router.post('/joinGame', function(req, res) {
  res.statusCode = 200
  let data = {
    roomName: 'lost-city-001'
  }
  res.send(data)
});

module.exports = router;
