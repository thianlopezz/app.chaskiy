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

var Tarifa =
  /*#__PURE__*/
  (function() {
    function Tarifa() {
      _classCallCheck(this, Tarifa);
    }

    _createClass(Tarifa, [
      {
        key: 'get',
        value: function get(idHospedaje, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('ta_tarifa', {
              accion: 'C1',
              idHospedaje: idHospedaje
            })
            .then(function(result) {
              var agrupado = [];

              var _loop = function _loop(i) {
                agrupado.push({
                  idTipo: result[0][i].idTipo,
                  tipoTarifa: result[0][i].tipoTarifa,
                  tarifas: result[1].filter(function(val) {
                    return val.idTipo == result[0][i].idTipo;
                  })
                });
              };

              for (var i = 0; i < result[0].length; i++) {
                _loop(i);
              }

              res.send({
                success: true,
                data: result[1],
                agrupado: agrupado
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Tarifa.getAgrupado>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'getTipos',
        value: function getTipos(res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execArrayToSp('ta_tipos')
            .then(function(result) {
              res.send({
                success: true,
                data: result[0]
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Tarifa.getTipos>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'mantenimiento',
        value: function mantenimiento(tarifa, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('ta_tarifa', tarifa)
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
              console.log('Error>> Tarifa.mantenimiento>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      }
    ]);

    return Tarifa;
  })();

var _default = new Tarifa();

exports['default'] = _default;
