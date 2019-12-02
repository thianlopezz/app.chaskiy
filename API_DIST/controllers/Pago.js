'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _moment = _interopRequireDefault(require('moment'));

var _DataAccess = _interopRequireDefault(require('./DataAccess'));

var _CorreoGenerico = _interopRequireDefault(require('./CorreoGenerico'));

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

var Pago =
  /*#__PURE__*/
  (function() {
    function Pago() {
      _classCallCheck(this, Pago);
    }

    _createClass(Pago, [
      {
        key: 'get',
        value: function get(idReserva, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('pg_pago', {
              accion: 'C',
              idReserva: idReserva
            })
            .then(function(result) {
              res.send({
                success: true,
                data: result[0]
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Pago.get>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'getByRango',
        value: function getByRango(params, res) {
          var dataAccess = new _DataAccess['default']();
          params.feDesde = (0, _moment['default'])(params.feDesde).format('YYYY-MM-DD');
          params.feHasta = (0, _moment['default'])(params.feHasta).format('YYYY-MM-DD');
          dataAccess
            .execJsonToSp(
              'pg_pago',
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
              console.log('Error>> Pago.get>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'mantenimiento',
        value: function mantenimiento(pago, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('pg_pago', pago)
            .then(function(result) {
              if (result[0][0].err == undefined) {
                // ENVIO DE RECEPCION DE PAGO
                if (pago.accion === 'I') {
                  var claves = result[0][0];
                  var plantilla = './plantillas/Chaskiy/recepcion_pago';
                  var asunto = 'Recepción de pago';
                  var destinatario = claves.correo;
                  var idHospedaje = claves.idHospedaje;

                  _CorreoGenerico['default'].enviar(asunto, destinatario, claves, plantilla, idHospedaje);
                }

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
              console.log('Error>> Pago.mantenimiento>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      }
    ]);

    return Pago;
  })();

var _default = new Pago();

exports['default'] = _default;
