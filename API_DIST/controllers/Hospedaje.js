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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

var Hospedaje =
  /*#__PURE__*/
  (function() {
    function Hospedaje() {
      _classCallCheck(this, Hospedaje);

      _defineProperty(this, 'setSociales', function(redes) {
        var retorno = '';

        for (var i = 0; i < redes.length; i++) {
          retorno = retorno + redes[i].idSocial + ';' + (redes[i].valor || '') + '|';
        }

        return retorno;
      });

      _defineProperty(this, 'setxml', function(data) {
        var params =
          '<params accion= "' +
          data.accion +
          '" idPais= "' +
          data.valuePa +
          '" idHospedaje= "' +
          data.idHospedaje +
          '" hospedaje= "' +
          data.hospedaje +
          '" ciudad= "' +
          data.ciudad +
          '" direccion= "' +
          data.direccion +
          '" correo= "' +
          data.correo +
          '" nombre= "' +
          data.nombre +
          '" sociales= "' +
          setSociales(data.redes) +
          '" socialLength= "' +
          data.redes.length +
          '" />';
        return params;
      });
    }

    _createClass(Hospedaje, [
      {
        key: 'get',
        value: function get(idHospedaje, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('ho_hospedaje', {
              accion: 'C',
              idHospedaje: idHospedaje
            })
            .then(function(result) {
              res.send({
                success: true,
                data: result
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Hospedaje.get>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'mantenimiento',
        value: function mantenimiento(hospedaje, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('ho_hospedaje', hospedaje)
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
              console.log('Error>> Hospedaje.mantenimiento>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      }
    ]);

    return Hospedaje;
  })();

var _default = new Hospedaje();

exports['default'] = _default;
