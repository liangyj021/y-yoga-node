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

let socketConfig = require('./sockets/index')
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
    next();
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
io.on('connection', function (socket) {
  console.log("get connected");
  socketConfig(socket)
})

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Young');

var db = mongoose.connection;
console.log('db', db)
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  debugger
  // yay!
});

var kittySchema = mongoose.Schema({
  name: String
})

var Kitten = mongoose.model('Kitten', kittySchema)
