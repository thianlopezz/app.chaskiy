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

var Especificacion =
  /*#__PURE__*/
  (function() {
    function Especificacion() {
      _classCallCheck(this, Especificacion);
    }

    _createClass(Especificacion, [
      {
        key: 'get',
        value: function get(res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_especificacion', {
              accion: 'C'
            })
            .then(function(result) {
              res.send({
                success: true,
                data: result[0]
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Especificacion.get ==> ' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'getById',
        value: function getById(idEspecificacion, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_especificacion', {
              accion: 'C1',
              idEspecificacion: idEspecificacion
            })
            .then(function(result) {
              if (!result[0] || !result[0][0]) {
                return res.status(404).send({
                  success: false
                });
              }

              res.send({
                success: true,
                data: result[0][0]
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Especificacion.getById>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'mantenimiento',
        value: function mantenimiento(especificacion, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_especificacion', especificacion)
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
              console.log('Error>> Especificacion.mantenimiento ==> ' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      }
    ]);

    return Especificacion;
  })();

var _default = new Especificacion();

exports['default'] = _default;
