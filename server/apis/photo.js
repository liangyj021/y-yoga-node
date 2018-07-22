"use strict"
let express = require('express');
let router = express.Router();
let Photo = require('../common/mongoose').Photo;
let newId =  require('../common/mongoose').newId;

router.get('*', function(req, res, next) {
  next();
})
router.post('*', function(req, res, next) {
  next()
})

router.get('/list', function(req, res) {
  Album
    .find({})
    .populate('image', {})
    .populate('creator', {_id: 1, name: 2, email: 3})
    .exec(function (err, datas) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(datas);
  })
});

router.post('/save', (req, res, next) => {
  let update = Object.assign({}, new Photo(req), {updatedAt: new Date().toISOString(),})
  let query = {_id: req.body._id || newId()};
  let options = {upsert: true, new: true};

  Photo.findOneAndUpdate(query, update, options, function (err, doc) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(datas);
  });
});

const photoParse = photo => ({
  _id: photo._id||newId,
  name: photo.name,
  description: photo.description,
  img: photo.img._id,
  author: photo.author._id,
  tags: photo.tags.map(i=> i._id),
  album: photo.album._id,
  createdAt: photo.createdAt||new Date().toISOString(),
  updatedAt: new Date().toISOString(),
})

module.exports = router;
