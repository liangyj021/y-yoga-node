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

router.get('/guide', function(req, res) {

})

router.get('/roomlist', function(req, res) {
  // TODO 定时器 每1分钟 检测 有人的room 人是否在线
  
})

router.use('/lostCity', lostCity)

module.exports = router;
