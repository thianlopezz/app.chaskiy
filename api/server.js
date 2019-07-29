import '@babel/polyfill';

import express from 'express';
import path from 'path';
import http from 'http';
import process from 'process';
import bodyParser from 'body-parser';

import api from './rutas/api';
import external from './rutas/external';

import connection from './MysqlConnection';

const forceSSL = function() {
  return function(req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
  };
};

const app = express();
app.enable('trust proxy');
// if (process.env.SQL_USER) { app.use(forceSSL()); }
// app.use(forceSSL());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api', api);
app.use('/chaskiy/api', external);

const uploadDir = process.env.UPLOAD_DIR || path.join(__dirname, '/files');
app.use('/files', express.static(uploadDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || '5000';
app.set('port', port);

connection.init();

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
