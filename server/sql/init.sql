db.createCollection('todo')
db.createCollection('user')
db.createCollection('token')
db.createCollection('blog')
db.createCollection('tag')
db.createCollection('keyword')
db.createCollection('lostcity')
db.createCollection('basedata')
db.createCollection('file')
db.createCollection('album')
db.createCollection('photo')
db.user.insert([
  { name: "young", password: "123456", email: "young@yyoga.com", admin: true, lastLoginAt: null, createdAt: new Date() },
  { name: "yoga", password: "123456", email: "yoga@yyoga.com", admin: true, lastLoginAt: null, createdAt: new Date() },
])
db.tag.insert([
  {title: 'JavaScript', key: 1, type: 'blog'},
  {title: 'node', key: 2, type: 'blog'},
  {title: 'people', key: 1, type: 'photo'},
])
db.basedata.insert([
  { key: "QiniuAccessKey", value: "iCaSfLjVptijqwoIfsxnuW1sIDlwfCgvZwHSMHl-", type: "qiniu" },
  { key: "QiniuSecretKey", value: "1vH4SHJJ-pnS3rU_YkeO3SaYoypndTWmaN8NFOD7", type: "qiniu" },
  { key: "QiniuBucket", value: "young-images-test", type: "qiniu" },
  { key: "QiniuDomain", value: "pbusb34dv.bkt.clouddn.com", type: "qiniu" },
])
db.keyword.insert([
  { name: "young", type: "us", words: [ "聪明", "熟练使用javascript", "vue.js", "react.js", "es6", "nodejs", "喜欢桌游" ] },
  { name: "yoga", type: "us", words: [ "好看", "爱好摄影", "javascript", "vue.js", "nginx", "es6", "nodejs" ] },
  { name: "techwords", type: "youngCircle", words: [ "JAVASCRIPT", "NODEJS", "SOCKET.IO", "REACT", "VUE.JS", "ANGULAR", "EXPRESS", "ECMASCRIPT", "WEBPACK", "GRAPHQL" ] },
  { name: "jskeywords", type: "youngCircle", words: [ "VAR", "ASYNC", "AWAIT", "LET", "CALLBACK", "CONSOLE.LOG", "DEBUGGER", "CONST", "FUNCTION", "REQUIRE", "EXPORTS" ] },
  { name: "tvplaywords", type: "youngCircle", words: [ "BREAKING BAD", "THIS IS US", "BOJACK HORSEMAN", "GAME OF THRONES", "STRAIN", "MR. PICKLES", "SPARTACUS", "AMERICAN GODS" ] },
  { name: "famouswords", type: "youngCircle", words: [ "HELLO WORLD", "FREE THINKING", "FSOCIETY", "HACKER", "YOUNG", "KEEP FOOLISH", "DESIGN" ] },
  { name: "famouspeople", type: "youngCircle", words: [ "ALAN TURING", "VON NEUMANN", "CLAUDE ELWOOD SHANNON", "ARCHIMEDES", "GALILEO", "NEWTON", "MAXWELL", "KEPLER", "GAUSS", "ALBERT.EINSTEIN", "FARADAY", "NIKOLA TESLA", "LEONARDO DA VINCI" ] },
  { name: "techwords2", type: "youngCircle", words: [ "DEEP LEARN", "ARTIFICIAL INTELLIGENCE", "INTERNET OF THINGS", "BLOCKCHAIN", "BIG DATA", "CLOUD COMPUTING" ] },
  { name: "normalwords", type: "youngCircle", words: [ "WORK EAT TALK", "SLEEP SEX RUN", "WALK THINK WATCH", "SUN MOON STAR", "COFFEE TEA JUICE", "RICE DUMPLING NOODLES", "BUTTER BREAD EGG", "LOVE FEELING WORLD" ] },
  { name: "normalwords2", type: "youngCircle", words: [ "GREEN RED HALO", "CONVERSATION INSPIRATION FUTURE", "AMIGO WISDOM TOGETHER", "COMMUNITY HARD WINNER", "LA LA LAND", "WHISKY VODKA GIN", "TEQUILA RUM BRANDY", "LIQUEUR CHAMPAGNE BAILEYS" ] },
])