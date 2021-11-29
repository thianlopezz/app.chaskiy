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

var Agencia =
  /*#__PURE__*/
  (function() {
    function Agencia() {
      _classCallCheck(this, Agencia);
    }

    _createClass(Agencia, [
      {
        key: 'get',
        value: function get(idHospedaje, res) {
          var dataAcces = new _DataAccess['default']();
          dataAcces
            .execJsonToSp('ag_agencia', {
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
              console.log('Error>> Agencia.get>>' + error);
              res.send({
                success: false,
                mensaje: '' + error.message
              });
            });
        }
      },
      {
        key: 'mantenimiento',
        value: function mantenimiento(agencia, res) {
          var dataAcces = new _DataAccess['default']();
          dataAcces
            .execJsonToSp('ag_agencia', agencia)
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
              console.log('Error>> Agencia.mantenimiento>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      }
    ]);

    return Agencia;
  })();

var _default = new Agencia();

exports['default'] = _default;
