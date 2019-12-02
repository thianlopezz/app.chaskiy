'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _mysql = _interopRequireDefault(require('mysql'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

var MysqlConnection =
  /*#__PURE__*/
  (function() {
    function MysqlConnection() {
      _classCallCheck(this, MysqlConnection);

      _defineProperty(this, 'pool', null);
    }

    _createClass(MysqlConnection, [
      {
        key: 'init',
        value: function init() {
          this.pool = _mysql['default'].createPool({
            connectionLimit: 15,
            host: process.env.MYSQL_HOST || '18.221.53.207',
            port: process.env.MYSQL_PORT || 3306,
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || 'katafl4mN.1',
            database: process.env.MYSQL_CHASKIY || 'chaskiy'
          });
        }
      },
      {
        key: 'acquire',
        value: function acquire() {
          var _this = this;

          return new Promise(function(resolve, reject) {
            _this.pool.getConnection(function(error, connection) {
              if (error) {
                reject(error);
              } else {
                resolve(connection);
              }
            });
          });
        }
      }
    ]);

    return MysqlConnection;
  })();

var _default = new MysqlConnection();

exports['default'] = _default;
