"use strict"
let express = require('express');
let router = express.Router();
let Blog = require('../common/mongoose').Blog;
let BlogRemark = require('../common/mongoose').BlogRemark;
let Tag = require('../common/mongoose').Tag;
let newId =  require('../common/mongoose').newId;

router.get('*', function(req, res, next) {
  next()
})
router.post('*', function(req, res, next) {
  next()
})

router.post('/category', function(req, res, next) {
  Tag.find({type: 'blog'}, (err, datas) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(datas)
  })
})

router.post('/list', function(req, res, next) {
  let reqParams = req.body;
  Blog
    .find(reqParams)
    .populate('author', {_id: 1, name: 2, email: 3})
    .populate('tags', [{_id: 1, title: 2, key: 3}])
    .exec((err, datas) => {
      if (err) {
        console.log(err)
        res.statusCode = 500;
        return res.send({})
      }
      res.statusCode = 200;
      return res.send(datas)
    })
})
router.get('/hotlist', function(req, res, next) {
  Blog
    .find({hot: true})
    .populate('author', {_id: 1, name: 2, email: 3})
    .exec((err, datas) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(datas)
  })
})

router.post('/save', function(req, res, next) {
  let blog = blogParse(req.body, req.user);
  Blog
    .findOneAndUpdate({_id: req.body._id||newId()}, blog, {new: true, upsert: true}, (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(data)
  })
})

router.get('/:id', function(req, res, next) {
  let id = req.params.id
  Blog
    .findOne({_id: id})
    .populate('author', {_id: 1, name: 2, email: 3})
    .exec((err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(data)
  })
})

router.get('/:blogId/remark', function(req, res, next) {
  let blogId = req.params.blogId;
  BlogRemark
    .find({blog: blogId})
    .populate('author', {_id: 1, name: 2, email: 3})
    .populate({path: 'replayRemark', populate: { path: 'author'}})
    .sort({createdAt: -1})
    .exec((err, data) => {
      if (err) {
        res.statusCode = 500;
        return res.send({})
      }
      res.statusCode = 200
      return res.send(data)
    })
})

router.post('/remark', function(req, res, next) {
  let remark = blogRemarkParse(req.body, req.user)
  BlogRemark
    .findOneAndUpdate({_id: req.body._id||newId()}, remark, {new: true, upsert: true}, (err, data) => {
    if(err) {
      res.statusCode = 500
      return res.send({})
    }
    res.statusCode = 200
    return res.send(data)
  })
})

const getBrief = (blog) => {
  if (!blog.brief) {
    let brief = blog.content;
    let markdownKeywords = {
      space: ['\n*', '##', '#', '```', '`', '___', '\n' ],
      none: ['**', '*', '~~'],
      space2: ['     ', '    ', '   ', '  ']
    }
    markdownKeywords.space.forEach(key => {
      brief = brief.split(key).join(' ')
    })
    markdownKeywords.none.forEach(key => {
      brief = brief.split(key).join('')
    })
    markdownKeywords.space2.forEach(key => {
      brief = brief.split(key).join(' ')
    })
    return brief.substring(0, 200)
  }
}

const blogParse = (blog, currentUser) => ({
  // _id: blog._id||newId,
  title: blog.title,
  content: blog.content,
  brief: blog.brief||getBrief(blog),
  author: blog.author._id||currentUser,
  tags: blog.tags.map(i => i._id),
  hot: blog.hot,
  createdAt: blog.createdAt||new Date().toISOString(),
  updatedAt: new Date().toISOString(),
})

const blogRemarkParse = (blogRemark, currentUser) => ({
  blog: blogRemark.blog,
  author: currentUser,
  replayRemark: blogRemark.replayRemark,
  content: blogRemark.content,
  createdAt: blogRemark.createdAt||new Date().toISOString(),
})

module.exports = router;
