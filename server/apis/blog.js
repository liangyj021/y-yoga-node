"use strict"
let express = require('express');
let router = express.Router();
let BlogList = require('../common/mongoose').BlogList;
let BlogTagList = require('../common/mongoose').BlogTagList;
let newId =  require('../common/mongoose').newId;

router.get('*', function(req, res, next) {
  next()
})
router.post('*', function(req, res, next) {
  next()
})

router.post('/category', function(req, res, next) {
  BlogTagList.find({}, (err, datas) => {
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
  BlogList
    .find(reqParams)
    .populate('authorId', {_id: 1, name: 2, email: 3})
    .exec((err, datas) => {
      if (err) {
        res.statusCode = 500;
        return res.send({})
      }
      res.statusCode = 200;
      return res.send(datas)
    })
})
router.get('/hotlist', function(req, res, next) {
  BlogList.find({is_hot: true}, (err, datas) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(datas)
  })
})

router.post('/save', function(req, res, next) {
  let blog = req.body;
  blog.isHot = true
  setBrief(blog)
  BlogList.findOneAndUpdate({_id: blog._id||newId()}, blog, {new: true, upsert: true}, (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(data)
  })
})

router.get('/blog/:id', function(req, res, next) {
  let id = req.params.id
  BlogList.findOne({_id: id}, (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.send({})
    }
    res.statusCode = 200;
    return res.send(data)
  })
})

// router.get('/updateSQL', function(req, res, next) {
//   updateSQL()
//   return;
// })
//
// const updateSQL = () => {
//   BlogList.find({}, (err, datas) => {
//
//   })
// }

const setBrief = (blog) => {
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
    blog.ibrief = brief.substring(0, 200)
  }
}

module.exports = router;
