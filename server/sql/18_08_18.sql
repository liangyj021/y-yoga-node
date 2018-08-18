db.createCollection('blogremark')
db.createCollection('music')

db.tag.insert([
  {title: '默认', key: 1, type: 'music'},
])

db.music.insert([
  { url: "http://music.163.com/song/media/outer/url?id=28660009.mp3", name: "Old Money", author: "unknown", tags: [db.tag.findOne({type: 'music'})._id]}, 
  { url: "http://music.163.com/song/media/outer/url?id=5046372.mp3", name: "Way Back To Love", author: "unknown", tags: [db.tag.findOne({type: 'music'})._id]}, 
  { url: "http://music.163.com/song/media/outer/url?id=642718.mp3", name: "君ノ瞳ニ恋シテル", author: "unknown", tags: [db.tag.findOne({type: 'music'})._id]}, 
  { url: "http://music.163.com/song/media/outer/url?id=38358220.mp3", name: "What is A Youth", author: "unknown", tags: [db.tag.findOne({type: 'music'})._id]}, 
  { url: "http://music.163.com/song/media/outer/url?id=1698589.mp3", name: "Wild World", author: "unknown", tags: [db.tag.findOne({type: 'music'})._id]}, 
  { url: "http://music.163.com/song/media/outer/url?id=30841780.mp3", name: "Death With Dignity", author: "unknown", tags: [db.tag.findOne({type: 'music'})._id]}, 
  { url: "http://music.163.com/song/media/outer/url?id=441612583.mp3", name: "City Of Stars", author: "unknown", tags: [db.tag.findOne({type: 'music'})._id]}, 
  { url: "http://music.163.com/song/media/outer/url?id=26354120.mp3", name: "Another Love", author: "unknown", tags: [db.tag.findOne({type: 'music'})._id]}, 
  { url: "http://music.163.com/song/media/outer/url?id=26354121.mp3", name: "I Know", author: "unknown", tags: [db.tag.findOne({type: 'music'})._id]}, 
  { url: "http://music.163.com/song/media/outer/url?id=401249910.mp3", name: "We Don't Talk Anymore", author: "unknown", tags: [db.tag.findOne({type: 'music'})._id]}, 
])