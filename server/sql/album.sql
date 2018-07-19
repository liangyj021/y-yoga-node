### album ##
db.createCollection('album', {autoIndexId: true})
db.album.insert({name: '我的相册', imgUrl: 'https://img1.doubanio.com/view/photo/l/public/p2217762129.webp', description: '~', createdAt: new Date(), updatedAt: new Date()})




## photo ##
db.photo.insert({
  name: 'ortrait',
  description: '',
  imgUrl: 'https://img3.doubanio.com/view/photo/l/public/p2527504053.webp',
  authorId: '',
  tags: ['人像'],
  createdAt: new Date(),
  updatedAt: new Date()})




# new Date() 与 Date()

# > db.tianyc04.insert({mark:1, mark_time:new Date()})
# > db.tianyc04.insert({mark:2, mark_time:Date()})

# { "_id" : ObjectId("5126e00939899c4cf3805f9b"), "mark" : 1, "mark_time" : ISODate("2013-02-22T03:03:37.312Z") }
# { "_id" : ObjectId("5126e00c39899c4cf3805f9c"), "mark" : 2, "mark_time" : "Fri Feb 22 2013 11:03:40 GMT+0800" }

# 使用new Date()，插入的是一个isodate类型；而使用Date()插入的是一个字符串类型。
# 那isodate是什么日期类型的？我们看这2个值，它比字符串大概少了8小时。这是由于mongo中的date类型以UTC（Coordinated Universal Time）存储，就等于GMT（格林尼治标准时）时间。而我当前所处的是+8区，所以mongo shell会将当前的GMT+0800时间减去8，存储成GMT时间。