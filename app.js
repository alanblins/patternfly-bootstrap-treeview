
/**
 * Module dependencies.
 */

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var errorhandler = require('errorhandler');
var methodOverride = require('method-override');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/tests')));

// development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});