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

var Adicional =
  /*#__PURE__*/
  (function() {
    function Adicional() {
      _classCallCheck(this, Adicional);
    }

    _createClass(Adicional, [
      {
        key: 'get',
        value: function get(idHospedaje, res) {
          var dataAcces = new _DataAccess['default']();
          dataAcces
            .execJsonToSp('ad_adicional', {
              accion: 'C',
              idHospedaje: idHospedaje
            })
            .then(function(result) {
              res.send({
                success: true,
                data: result[0]
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Adicional.get>>' + error);
              res.send({
                success: false,
                mensaje: '' + error.message
              });
            });
        }
      },
      {
        key: 'mantenimiento',
        value: function mantenimiento(adicional, res) {
          var dataAcces = new _DataAccess['default']();
          dataAcces
            .execJsonToSp('ad_adicional', adicional)
            .then(function(result) {
              if (result[0][0].err == undefined) {
                res.send({
                  success: true,
                  mensaje: result[0][0].mensaje
                });
              } else {
                res.send({
                  success: false,
                  mensaje: result[0][0].mensaje
                });
              }
            })
            ['catch'](function(error) {
              console.log('Error>> Adicional.mantenimiento>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      }
    ]);

    return Adicional;
  })();

var _default = new Adicional();

exports['default'] = _default;
