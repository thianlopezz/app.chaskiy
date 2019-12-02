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

var Pasajero =
  /*#__PURE__*/
  (function() {
    function Pasajero() {
      _classCallCheck(this, Pasajero);
    }

    _createClass(Pasajero, [
      {
        key: 'get',
        value: function get(idHospedaje, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('pa_pasajero', {
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
              console.log('Error>> Pasajero.get>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'getByCorreo',
        value: function getByCorreo(correo, idHospedaje, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('pa_pasajero', {
              accion: 'C1',
              correo: correo,
              idHospedaje: idHospedaje
            })
            .then(function(result) {
              res.send({
                success: true,
                data: result[0]
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Pasajero.get>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'mantenimiento',
        value: function mantenimiento(pasajero, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('pa_pasajero', pasajero)
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
              console.log('Error>> Pasajero.mantenimiento>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      }
    ]);

    return Pasajero;
  })();

var _default = new Pasajero();

exports['default'] = _default;
