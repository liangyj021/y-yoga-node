"use strict"
let express = require('express');
let router = express.Router();
let Album = require('../common/mongoose').Album;
let newId =  require('../common/mongoose').newId;
const Common = require('../common/common')

router.get('*', function(req, res, next) {
  next();
})
router.post('*', function(req, res, next) {
  console.log('album req', req);
  next()
})

router.get('/list', function(req, res) {
  Album.find({}, function (err, datas) {
    console.log(datas)
    if (err) return console.error(err);
    res.statusCode = 200
    datas.imgUrl = Common.getImgUrl(datas.imgId);
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
