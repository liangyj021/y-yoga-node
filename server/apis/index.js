"use strict"
let express = require('express');
let router = express.Router();
let todo = require('./todo')
let game = require('./game')
let blog = require('./blog')
let user = require('./user')
let qiniu = require('./qiniu')
let keywords = require('./keywords')

router.get('*', function(req, res, next) {
  next()
})
router.post('*', function(req, res, next) {
  next()
})

router.use('/todo', todo)
router.use('/game', game)
router.use('/blog', blog)
router.use('/user', user)
router.use('/keywords', keywords)
router.use('/qiniu', qiniu)

module.exports = router;
