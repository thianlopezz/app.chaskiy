'use strict';

var express = require('express');

var path = require('path');

var https = require('https');

var fs = require('fs');

var process = require('process');

var bodyParser = require('body-parser');

var api = require('./rutas/api');

var external = require('./rutas/external');

var forceSSL = function forceSSL() {
  return function(req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }

    next();
  };
};

var app = express(); // app.enable('trust proxy');

var connection = require('./connection');

var key = fs.readFileSync(path.join(__dirname, './certs/www.chaskiy.com.key'));
var cert = fs.readFileSync(path.join(__dirname, './certs/www.chaskiy.com.crt')); // var ca = fs.readFileSync(path.join(__dirname, './certs/intermediate.cer'));

var options = {
  key: key,
  cert: cert
};
app.use(forceSSL());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express['static'](path.join(__dirname, '../dist')));
app.use('/api', api);
app.use('/chaskiy/api', external);
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
var port = process.env.PORT || '443';
app.set('port', port);
connection.init();
var server = https.createServer(options, app);
server.listen(port, function() {
  return console.log('API running on localhost:'.concat(port));
});
