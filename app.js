
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    fs = require('fs'),
    http = require('http'),
    https = require('https'),
    helmet = require('helmet'),
    path = require('path');

var app = express(),
    insecure_app = express();

var credentials = {
  ca: fs.readFileSync('felixsargent_com.ca-bundle'),
  key: fs.readFileSync('felixsargent_com.key'),
  cert: fs.readFileSync('felixsargent_com.crt')
};


app.configure(function(){
  app.set('port', 8443);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(helmet.hsts());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/coffee', routes.coffee);
app.get('/users', user.list);

https.createServer(credentials, app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


insecure_app.get('*',function(req, res){
    console.log('Redirected to secure https://' + req.headers.host + req.url);
    res.redirect('https://' + req.headers.host + req.url);
});

http.createServer(insecure_app).listen(8080, function(){
    console.log("Insecure server listening on port 8080");
});
