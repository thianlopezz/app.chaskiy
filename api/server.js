const express = require('express');
const path = require('path');
const http = require('http');
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
app.enable('trust proxy');
var connection = require('./connection');
if (process.env.SQL_USER) { app.use(forceSSL()); } 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api', api);
app.use('/chaskiy/api', external);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || '5000';
app.set('port', port);

connection.init();

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
