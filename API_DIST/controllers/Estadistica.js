'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _moment = _interopRequireDefault(require('moment'));

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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

var Estadistica =
  /*#__PURE__*/
  (function() {
    function Estadistica() {
      _classCallCheck(this, Estadistica);

      _defineProperty(this, 'getOcupacion', function(result, params) {
        var feDesde = (0, _moment['default'])(params.feDesde);
        var feHasta = (0, _moment['default'])(params.feHasta);
        var meses = [];

        while (feDesde.isSameOrBefore(feHasta)) {
          meses.push({
            mes: +feDesde.format('MM'),
            anio: +feDesde.format('YYYY')
          });
          feDesde.add(1, 'months');
        }

        feDesde = (0, _moment['default'])(params.feDesde);
        meses.forEach(function(mesAnio) {
          var feDesde = (0, _moment['default'])(mesAnio.anio + '-' + mesAnio.mes + '-' + '01', 'YYYY-MM-DD');
          var feHasta = (0, _moment['default'])(mesAnio.anio + '-' + mesAnio.mes + '-' + '01', 'YYYY-MM-DD').endOf(
            'month'
          );
          var porHabitaciones = result.filter(function(x) {
            return (
              ((0, _moment['default'])(x.feDesde).isSameOrAfter(feDesde) &&
                (0, _moment['default'])(x.feDesde).isSameOrBefore(feHasta)) ||
              ((0, _moment['default'])(x.feHasta).isSameOrAfter(feDesde) &&
                (0, _moment['default'])(x.feHasta).isSameOrBefore(feHasta))
            );
          });
          var ocupacion = 0;
          porHabitaciones.forEach(function(porHabitacion, i) {
            porHabitacion.feDesde = (0, _moment['default'])(porHabitacion.feDesde);
            porHabitacion.feHasta = (0, _moment['default'])(porHabitacion.feHasta);

            if (porHabitacion.feDesde.isBefore(feDesde)) {
              porHabitacion.feDesde = feDesde;
            }

            if (porHabitacion.feHasta.isAfter(feHasta)) {
              porHabitacion.feHasta = feHasta;
            }

            ocupacion += porHabitacion.feHasta.diff(porHabitacion.feDesde, 'days') + 1;
          });
          mesAnio.ocupacion = ocupacion;
        });
        return meses;
      });
    }

    _createClass(Estadistica, [
      {
        key: 'getPagos',
        value: function getPagos(params, res) {
          var dataAccess = new _DataAccess['default']();
          params.feDesde = (0, _moment['default'])(params.feDesde).format('YYYY-MM-DD');
          params.feHasta = (0, _moment['default'])(params.feHasta).format('YYYY-MM-DD');
          dataAccess
            .execJsonToSp(
              'st_statistic',
              Object.assign(
                {
                  accion: 'C1'
                },
                params
              )
            )
            .then(function(result) {
              res.send({
                success: true,
                data: result[0]
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Statistic.getPagos>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'getOcupacionPorRango',
        value: function getOcupacionPorRango(params, res) {
          var _this = this;

          var dataAccess = new _DataAccess['default']();
          params.feDesde = (0, _moment['default'])(params.feDesde).format('YYYY-MM-DD');
          params.feHasta = (0, _moment['default'])(params.feHasta).format('YYYY-MM-DD');
          dataAccess
            .execJsonToSp(
              'st_statistic',
              Object.assign(
                {
                  accion: 'C2'
                },
                params
              )
            )
            .then(function(result) {
              res.send({
                success: true,
                data: _this.getOcupacion(result[0], params)
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Statistic.getOcupacionPorMes>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'getCaptacion',
        value: function getCaptacion(idHospedaje, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('st_statistic', {
              accion: 'C3',
              idHospedaje: idHospedaje
            })
            .then(function(result) {
              var data = {
                fuentes: result[0],
                porFuente: result[1],
                totalPorMes: result[2]
              };
              res.send({
                success: true,
                data: data
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Statistic.getPagos>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      }
    ]);

    return Estadistica;
  })();

var _default = new Estadistica();

exports['default'] = _default;
