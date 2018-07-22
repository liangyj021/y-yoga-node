"use strict"
let express = require('express');
let router = express.Router();
let User = require('../common/mongoose').User;
let Token = require('../common/mongoose').Token;
let Common = require('../common/common.js');
let MailSender = require('../common/mailSender');

router.get('*', function(req, res, next) {
  next();
})
router.post('*', function(req, res, next) {
  next()
})

router.post('/login', (req, res, next) => {
  let user = req.body;
  User
    .findOne({name: user.username})
    .select()
    .exec((err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    if (!data || data.password != user.password) {
      res.statusCode = 401;
      return res.send({})
    }
    Token.remove({user: data._id}, (error) => {
      if (error) {
        res.statusCode = 500;
        return res.send({})
      }
      let token = Common.uuid()
      Token.create({
        token,
        userId: data._id,
        userName: data.name,
      }, (err, doc) => {
        res.cookie('y_token',token);
        res.statusCode = 200;
        delete data.password
        return res.send(data)
      })
    })
  })
})

router.get('/me', (req, res, next) => {
  let user
  if (req.user && req.user._id) {
    User
      .findOne({_id: req.user.userId})
      .select({email: 1, name: 2, admin: 3, _id: 4})
      .exec((err, data) => {
      if (err) {
        res.statusCode = 500;
        return res.send({})
      }
      res.statusCode = 200;
      user = data
      return res.send(user)
    })
  } else {
    res.statusCode = 401;
    return res.send({})
  }
})

router.get('/logout', (req, res, next) => {
  if (req.user && req.user.userId) {
    Token.remove({userId: req.user.userId}, (error) => {
      res.statusCode = 200;
      res.cookie('y_token', "");
      return res.send({})
    })
  } else {
    res.statusCode = 200;
    return res.send({})
  }
})

router.post('/register', function(req, res) {
  MailSender.sendMail('onlysuncolour@sina.com', "这是来自你老公的一封邮件", "我爱你～<br /> 一辈子！")
  res.statusCode = 200;
  return res.send({})
});

module.exports = router;
