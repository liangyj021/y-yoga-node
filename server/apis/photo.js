"use strict"
let express = require('express');
let router = express.Router();
let Photo = require('../common/mongoose').Photo;
let Tag = require('../common/mongoose').Tag;
let newId =  require('../common/mongoose').newId;

router.get('*', function(req, res, next) {
  next();
})
router.post('*', function(req, res, next) {
  next()
})

router.get('/list', function(req, res) {
  Photo
    .find(req.query)
    .populate('img')
    .populate('tags')
    .populate('album')
    .populate('creator', {_id: 1, name: 2, email: 3})
    .exec(function (err, datas) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(datas);
  })
});

router.post('/save', (req, res, next) => {
  let query = {_id: req.body._id || newId()};
  let photo = photoParse(req.body, req.user)
  let options = {upsert: true, new: true};
  Photo.findOneAndUpdate(query, photo, options, function (err, doc) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(doc);
  });
});


router.post('/tags', function(req, res, next) {
  Tag.find({type: 'photo'}, (err, datas) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(datas)
  })
})

const photoParse = (photo, currentUser) => ({
  // _id: photo._id||newId,
  name: photo.name,
  description: photo.description,
  img: photo.img._id,
  author: photo.author?photo.author._id:currentUser,
  tags: photo.tags.map(i=> i._id),
  album: photo.album._id,
  createdAt: photo.createdAt||new Date().toISOString(),
  updatedAt: new Date().toISOString(),
})

module.exports = router;
