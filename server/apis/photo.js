"use strict"
let express = require('express');
let router = express.Router();
let Photo = require('../common/mongoose').Photo;
let newId =  require('../common/mongoose').newId;

router.get('*', function(req, res, next) {
  next();
  // console.log(req);
})
router.post('*', function(req, res, next) {
  // console.log(req);
  next()
})

router.get('/list', function(req, res) {
  Album.find({}, function (err, datas) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(datas);
  })
});

router.post('/save', (req, res, next) => {
  let update = Object.assign({}, new Photo(req), {updatedAt: req.body.updatedAt || req.body.createdAt,})
  let query = {_id: req.body._id || newId()};
  let options = {upsert: true, new: true};

  Photo.findOneAndUpdate(query, update, options, function (err, doc) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(datas);
  });
});

module.exports = router;
