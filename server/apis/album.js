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
    .populate('img', {})
    .populate('creator', {_id: 1, name: 2, email: 3, admin: 4})
    .exec(function (err, datas) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(datas);
  })
});

router.get('/getOne', function(req, res) {
  let _id = req.query.id
  Album
    .findOne({_id})
    .populate('img', {})
    .populate('creator', {_id: 1, name: 2, email: 3, admin: 4})
    .exec((err, doc) => {
    if (err) {
      return console.error(err);
    }
    res.statusCode = 200
    return res.send(doc)
  })
})

router.post('/save', (req, res, next) => {
  let update = albumParse(req.body, req.user)
  let query = {_id: req.body._id||newId()};
  let options = {upsert: true, new: true};
  Album.findOneAndUpdate(query, update, options, function (err, doc) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(doc);
  });
});

const albumParse = (album, currentUser) => ({
  name: album.name,
  description: album.description,
  img: album.img._id,
  creator: album.creator? album.creator._id : currentUser,
  createdAt: album.createdAt||new Date().toISOString(),
  updatedAt: new Date().toISOString(),
})

module.exports = router;
