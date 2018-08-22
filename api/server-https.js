const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
const process = require('process');
const bodyParser = require('body-parser');

const api = require('./rutas/api');
const external = require('./rutas/external');

const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

const app = express();
// app.enable('trust proxy');
var connection = require('./connection');

var key = fs.readFileSync(path.join(__dirname, './certs/www.chaskiy.com.key'));
var cert = fs.readFileSync(path.join(__dirname, './certs/www.chaskiy.com.crt'));
// var ca = fs.readFileSync(path.join(__dirname, './certs/intermediate.cer'));

var options = {
  key: key,
  cert: cert
};

app.use(forceSSL());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api', api);
app.use('/chaskiy/api', external);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || '443';
app.set('port', port);

connection.init();

const server = https.createServer(options, app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
