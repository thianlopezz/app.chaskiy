'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _MysqlConnection = _interopRequireDefault(require('../MysqlConnection'));

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

var DataAccess =
  /*#__PURE__*/
  (function() {
    function DataAccess() {
      _classCallCheck(this, DataAccess);
    }

    _createClass(DataAccess, [
      {
        key: 'execJsonToSp',
        // ('nombreDeStoreProcedure', objeto)
        value: function execJsonToSp(stored_procedure) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return new Promise(function(resolve, reject) {
            _MysqlConnection['default']
              .acquire()
              .then(function(conn) {
                var exec = 'call '.concat(stored_procedure, "('").concat(JSON.stringify(data), "')");
                console.log('exec>> ' + exec);
                conn.query(exec, function(error, result) {
                  conn.release();

                  if (error) {
                    console.log('Error>> Metodo: "execJsonToSp", "con.query">> ' + error);
                    reject(error);
                  } else {
                    resolve(result);
                  }
                });
              })
              ['catch'](function(error) {
                console.log('Error>> Metodo: "execJsonToSp", "connection.acquire">> ' + error);
                reject(error);
              });
          });
        }
      },
      {
        key: 'execArrayToSp',
        value: function execArrayToSp(stored_procedure) {
          var _this = this;

          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          return new Promise(function(resolve, reject) {
            _MysqlConnection['default']
              .acquire()
              .then(function(conn) {
                var params = _this.getParamsArray(data);

                var exec = 'call ' + stored_procedure + '(' + params + ')';
                console.log('exec>> ' + exec);
                conn.query(exec, function(error, result) {
                  conn.release();

                  if (error) {
                    console.log('Error>> Metodo: "execArrayToSp", "con.query">> ' + error);
                    reject(error);
                  } else {
                    resolve(result);
                  }
                });
              })
              ['catch'](function(error) {
                console.log('Error>> Metodo: "execArrayToSp", "connection.acquire">> ' + error);
                reject(error);
              });
          });
        }
      },
      {
        key: 'execQuery',
        value: function execQuery(sql) {
          return new Promise(function(resolve, reject) {
            _MysqlConnection['default']
              .acquire()
              .then(function(conn) {
                console.log('query>> ' + sql);
                conn.query(sql, function(error, result) {
                  conn.release();

                  if (error) {
                    console.log('Error>> Metodo: "execQuery", "con.query">> ' + error);
                    reject(error);
                  } else {
                    resolve(result);
                  }
                });
              })
              ['catch'](function(error) {
                console.log('Error>> Metodo: "execQuery", "connection.acquire">> ' + error);
                reject(error);
              });
          });
        }
      },
      {
        key: 'getParamsArray',
        value: function getParamsArray(array) {
          var params = '';

          for (var i = 0; i < array.length; i++) {
            if (i < array.length - 1) {
              params += "'" + array[i] + "',";
            } else if (i === array.length - 1) {
              params += "'" + array[i] + "'";
            }
          }

          return params;
        }
      }
    ]);

    return DataAccess;
  })();

exports['default'] = DataAccess;
