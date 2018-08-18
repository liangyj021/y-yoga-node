"use strict"
let express = require('express');
let router = express.Router();
let todo = require('./todo')
let game = require('./game')
let blog = require('./blog')
let user = require('./user')
let album = require('./album')
let photo = require('./photo')
let qiniu = require('./qiniu')
let keywords = require('./keywords')
let music = require('./music')

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
router.use('/album', album)
router.use('/photo', photo)
router.use('/keywords', keywords)
router.use('/qiniu', qiniu)
router.use('/music', music)

module.exports = router;
