/**
 * Module dependencies.
 */
"use strict"

let express = require('express'),
  favicon = require('serve-favicon'),
  http = require('http'),
  path = require('path'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorhandler = require('errorhandler'),

  api = require('./apis/index');

let socketConfig = require('./sockets/index'),
    Common = require('./common/common.js'),
    Tokenlist = require('./common/mongoose').Tokenlist;

let app = express();

// all environments
app.set('port', process.env.PORT || 9521);

// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9520');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    res.setHeader('Vary',["Origin", "Accept-Encoding"]);
    res.setHeader('Transfer-Encoding',"chunked");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
    res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
    res.setHeader("Expires", "0"); // Proxies.

    if (req.cookies.y_token) {
      Tokenlist.findOne({token: req.cookies.y_token}, (err, user) => {
        if (user) {
          console.log("user", user);
          req.user = user
        }
        next()
      })
    } else {
      next()
    }
});

app.use('/api', api);

// development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

let server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

let io = require('socket.io').listen(server);
let custom_id = 1
io.engine.generateId = (req) => {
  return Common.getSocketId(req._query.token)
}
io.on('connection', function (socket) {
  // console.log("get connected");
  socketConfig(socket)
})
