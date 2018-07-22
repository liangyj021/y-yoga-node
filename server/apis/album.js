"use strict"
let express = require('express');
let router = express.Router();
let Album = require('../common/mongoose').Album;
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
    .exec(function (err, datas) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(datas);
  })
});

router.post('/save', (req, res, next) => {
  let update = Object.assign({}, new Album(req), {updatedAt: new Date().toISOString()})
  let query = {_id: req.body._id || newId()};
  let options = {upsert: true, new: true};

  Album.findOneAndUpdate(query, update, options, function (err, doc) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(datas);
  });
});

const albumParse = album => ({
  _id: album._id||newId,
  name: album.name,
  description: album.description,
  img: album.img._id,
  creator: album.creator._id,
  createdAt: album.createdAt||new Date().toISOString(),
  updatedAt: new Date().toISOString(),
})

module.exports = router;
