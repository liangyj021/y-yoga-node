"use strict"
let express = require('express');
let router = express.Router();
let Album = require('../common/mongoose').Album;
console.log(Album, '----------')
let newId =  require('../common/mongoose').newId;

router.get('*', function(req, res, next) {
  console.log('album req', req);
  next();
})
router.post('*', function(req, res, next) {
  console.log('album req', req);
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
  let update = Object.assign({}, new Album(req), {updatedAt: req.body.updatedAt || req.body.createdAt,})
  let query = {_id: req.body._id || newId()};
  let options = {upsert: true, new: true};

  Album.findOneAndUpdate(query, update, options, function (err, doc) {
    if (err) return console.error(err);
    res.statusCode = 200
    return res.send(datas);
  });
});

module.exports = router;
