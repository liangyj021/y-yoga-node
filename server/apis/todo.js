"use strict"
let express = require('express');
let router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/young');
var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log("mongodb connected!")
});
// schema
var todoSchema = mongoose.Schema({
  title: String,
  id: Number,
  type: String
}, {collection: 'todolist'});

// model
var Todolist = mongoose.model('Todolist', todoSchema);

router.get('*', function(req, res, next) {
  console.log(req.url, 'todo');
  next();
  // console.log(req);
})
router.post('*', function(req, res, next) {
  // console.log(req);
  next()
})

router.post('/create', (req, res, next) => {
  console.log(req)
  // var fluffy = new Todolist({ id: 900, title: 'fluffy', type: 'todo' });
  var fluffy = new Todolist({
    title: req.body.id,
    title: req.body.title,
    type: req.body.type
  });
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    console.log(fluffy)
  });
})

/* GET home page. */
router.get('/getlist', function(req, res) {
  // let data = {
  //   todos: [
  //     {id: 0, title: "导航 -- 主要是react-router与导航样式", type: 'done'},
  //     {id: 1, title: "登录 注册 -- 主要是各种权限控制、与后端交互", type: 'todo'},
  //     {id: 2, title: "弹出浮层的样式、交互", type: 'todo'},
  //     {id: 3, title: "双人主页 -- 写一个统一的单人页面", type: 'todo'},
  //     {id: 4, title: "单人页面 -- 俩人各写各的", type: 'todo'},
  //     {id: 5, title: "单人页面的编辑", type: 'todo'},
  //     {id: 6, title:	"双人主页的编辑", type: 'todo'},
  //     {id: 7, title: "博客列表", type: 'todo'},
  //     {id: 8, title:	"博客内容分类 或 日期分类", type: 'todo'},
  //     {id: 9, title: "博客正文", type: 'todo'},
  //     {id: 10, title: "博客留言", type: 'todo'},
  //     {id: 11, title: "发表博客", type: 'todo'},
  //     {id: 12, title: "照片墙 照片album列表", type: 'todo'},
  //     {id: 13, title: "浏览照片", type: 'todo'},
  //     {id: 14, title: "单张照片", type: 'todo'},
  //     {id: 15, title: "说说 - 展示与更新", type: 'todo'},
  //     {id: 16, title: "音乐播放器", type: 'todo'},
  //     {id: 17, title: "404页面使用flappy bird", type: 'todo'},
  //     {id: 18, title: "TODO", type: 'todo'},
  //   ],
  // }
  // console.log(req.url, 'todo getlist');
  // res.statusCode = 200
  // return res.send({todos:[]});

  // 求助～～不知道这里为什么查询 的是是todolists这个表，然而创建的是todolist
  Todolist.find({}, function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens)
    let data = {todos: kittens};
    res.statusCode = 200
    return res.send(data);
  })
});

module.exports = router;
