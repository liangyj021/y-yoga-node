"use strict"
let express = require('express');
let router = express.Router();
let Userlist = require('../common/mongoose').Userlist;
let Tokenlist = require('../common/mongoose').Tokenlist;
let Common = require('../common/common.js');
let MailSender = require('../common/mailSender');

router.get('*', function(req, res, next) {
  console.log(req.url, 'todo');
  next();
})
router.post('*', function(req, res, next) {
  next()
})

router.post('/login', (req, res, next) => {
  let user = req.body;
  console.log(user);
  Userlist.findOne({name: user.username}, (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    if (!data || data.password != user.password) {
      res.statusCode = 401;
      return res.send({})
    }
    let me = {
      userId: data._id,
      userName: data.name
    }
    Tokenlist.remove({userId: data.id}, (error) => {
      if (error) {
        console.log("error", error);
        res.statusCode = 500;
        return res.send({})
      }
      let token = Common.uuid()
      Tokenlist.create({
        token,
        ...me,
      }, (err, doc) => {
        res.cookie('y_token',token);
        res.statusCode = 200;
        return res.send(me)
      })
    })
  })
})

router.get('/me', (req, res, next) => {
  let user
  if (req.user && req.user._id) {
    res.statusCode = 200;
    user = req.user
    return res.send(user)
  } else {
    res.statusCode = 401;
    return res.send({})
  }
})

router.get('/logout', (req, res, next) => {
  if (req.user && req.user.userId) {
    Tokenlist.remove({userId: req.user.userId}, (error) => {
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
