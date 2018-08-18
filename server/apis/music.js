"use strict"
let express = require('express');
let router = express.Router();
let Music = require('../common/mongoose').Music;
let Tag = require('../common/mongoose').Tag;
let newId =  require('../common/mongoose').newId;

router.get('*', function(req, res, next) {
  next();
})
router.post('*', function(req, res, next) {
  next()
})

router.get('/list', function(req, res) {
  Music
    .find(req.query)
    .populate('tags')
    .exec(function (err, datas) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(datas);
  })
});

router.get('/tags', function(req, res) {
  Tag
    .find({type: "music"})
    .exec(function (err, datas) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(datas);
  })
});

router.post('/save', (req, res, next) => {
  let query = {_id: req.body._id || newId()};
  let music = musicParse(req.body, req.user)
  let options = {upsert: true, new: true};
  Music.findOneAndUpdate(query, music, options, function (err, doc) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(doc);
  });
});

const musicParse = (music, currentUser) => ({
  // _id: music._id||newId,
  name: music.name,
  author: music.author,
  url: music.url,
  tags: music.tags.map(i=> i._id),
  createdAt: music.createdAt||new Date().toISOString(),
  updatedAt: new Date().toISOString(),
})

module.exports = router;
