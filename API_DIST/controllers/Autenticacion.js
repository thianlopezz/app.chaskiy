'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _DataAccess = _interopRequireDefault(require('./DataAccess'));

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

var Autenticacion =
  /*#__PURE__*/
  (function() {
    function Autenticacion() {
      _classCallCheck(this, Autenticacion);
    }

    _createClass(Autenticacion, [
      {
        key: 'logIn',
        value: function logIn(usuario, password, res) {
          return new Promise(function(resolve, reject) {
            var dataAccess = new _DataAccess['default']();
            dataAccess
              .execArrayToSp('seg_login', [usuario, password])
              .then(function(result) {
                if (result[0][0].err == undefined) {
                  resolve({
                    success: true,
                    usuario: result[0][0]
                  });
                } else {
                  reject({
                    success: false,
                    mensaje: result[0][0].mensaje
                  });
                }
              })
              ['catch'](function(error) {
                console.log('Error>> auth.logIn>>' + error);
                reject({
                  success: false,
                  mensaje: result[0][0].mensaje
                });
              });
          });
        }
      }
    ]);

    return Autenticacion;
  })();

var _default = new Autenticacion();

exports['default'] = _default;
