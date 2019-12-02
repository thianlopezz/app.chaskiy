'use strict';

require('@babel/polyfill');

var _express = _interopRequireDefault(require('express'));

var _path = _interopRequireDefault(require('path'));

var _http = _interopRequireDefault(require('http'));

var _process = _interopRequireDefault(require('process'));

var _bodyParser = _interopRequireDefault(require('body-parser'));

var _api = _interopRequireDefault(require('./rutas/api'));

var _external = _interopRequireDefault(require('./rutas/external'));

var _MysqlConnection = _interopRequireDefault(require('./MysqlConnection'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var forceSSL = function forceSSL() {
  return function(req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }

    next();
  };
};

var app = (0, _express['default'])();
app.enable('trust proxy'); // if (process.env.SQL_USER) { app.use(forceSSL()); }
// app.use(forceSSL());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// CONFIG TO AVOID 413

app.use(
  _bodyParser['default'].json({
    limit: '10mb'
  })
);
app.use(
  _bodyParser['default'].urlencoded({
    limit: '10mb',
    extended: true
  })
);
app.use(_express['default']['static'](_path['default'].join(__dirname, '../dist')));
app.use('/api', _api['default']);
app.use('/chaskiy/api', _external['default']);

var uploadDir = _process['default'].env.UPLOAD_DIR || _path['default'].join(__dirname, '/files/gallery');

app.use('/files', _express['default']['static'](uploadDir));
app.get('*', function(req, res) {
  res.sendFile(_path['default'].join(__dirname, '../dist/index.html'));
});
var port = _process['default'].env.PORT || '5000';
app.set('port', port);

_MysqlConnection['default'].init();

var server = _http['default'].createServer(app);

server.listen(port, function() {
  return console.log('API running on localhost:'.concat(port));
});
