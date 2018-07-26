"use strict"
let express = require('express');
let router = express.Router();
let BaseData = require('../common/mongoose').BaseData;
let File = require('../common/mongoose').File;
let qiniu = require('qiniu')

router.get('*', function(req, res, next) {
  next();
})
router.post('*', function(req, res, next) {
  next()
})

router.post('/token', (req, res, next) => {
  BaseData.find({type: 'qiniu'}, function (err, datas) {
    if (err || datas.length <= 3) {
      return console.error('七牛配置获取失败');
    }
    let accessKey = datas.filter(i => i.key == 'QiniuAccessKey')[0].value
    let secretKey = datas.filter(i => i.key == 'QiniuSecretKey')[0].value
    let bucket = datas.filter(i => i.key == 'QiniuBucket')[0].value
    let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    let options = {
      scope: bucket,
      expires: 7200
    };
    let putPolicy = new qiniu.rs.PutPolicy(options);
    let uploadToken = putPolicy.uploadToken(mac);
    res.statusCode = 200;
    return res.send({token: uploadToken})
  })
})
router.post('/addFile', (req, res, next) => {
  let files = req.body;
  BaseData.findOne({key: 'QiniuDomain'}, function (err, data) {
    if (err) {
      return console.error('七牛配置获取失败');
    }
    files.forEach(i => {
      i.domain = data.value
      i.url = 'http://' + i.domain + '/' + i.key
    })
    File.insertMany(files, function(err, docs) {
      if (err) {
        return console.error('七牛配置获取失败');
      }
      res.statusCode = 200;
      return res.send(docs)
    })
  })
})

module.exports = router;
