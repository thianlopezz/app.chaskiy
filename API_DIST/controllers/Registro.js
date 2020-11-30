'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _DataAccess = _interopRequireDefault(require('./DataAccess'));

var _moment = _interopRequireDefault(require('moment'));

var _md = _interopRequireDefault(require('md5'));

var _axios = _interopRequireDefault(require('axios'));

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

var API = process.env.CORREO_GENERICO || 'http://localhost:3000'; // const API = process.env.CORREO_GENERICO || 'https://correo-generico.herokuapp.com';

var TOKEN_CORREO = process.env.TOKEN_CORREO || '123';

var Registro =
  /*#__PURE__*/
  (function() {
    function Registro() {
      _classCallCheck(this, Registro);

      _defineProperty(this, 'enviaCorreo', function(idHospedaje, claves, asunto, plantilla, destinatario, callback) {
        var correo = {
          idHospedaje: idHospedaje,
          asunto: asunto,
          destinatario: destinatario,
          claves: claves,
          plantilla: plantilla,
          token: TOKEN_CORREO
        };

        _axios['default']
          .post(''.concat(API, '/api/send'), correo)
          .then(function(result) {
            callback(result.data);
          })
          ['catch'](function(error) {
            console.log('Err>>' + error);
            callback(error);
          });
      });
    }

    _createClass(Registro, [
      {
        key: 'enviaRecupera',
        value: function enviaRecupera(registro, res) {
          var token = (0, _md['default'])(registro.correo + '' + (0, _moment['default'])().format('DDMMYYYYhhmmss'));
          var accion = 'R';
          var params = '<params accion= "' + accion + '" correo= "' + registro.correo + '" token= "' + token + '" />';
          var dataAcess = new _DataAccess['default']();
          dataAcess
            .execArrayToSp('reg_recupera', [params])
            .then(function(result) {
              if (result[0][0].err == undefined) {
                var claves = 'nombre_usuario:' + result[0][0].nombre + ';tokenRecupera:' + tokenRecupera;
                enviaCorreo(
                  result[0][0].idHospedaje,
                  claves,
                  'Recuperacion de contraseña',
                  './plantillas/Chaskiy/recupera_pass',
                  _registro.correo,
                  function(result) {
                    if (!result.success) {
                      console.log('Error>> Register.enviaRecupera>> Error en el registro de envio de correo');
                    }

                    res.send({
                      success: true,
                      mensaje: ''
                    });
                  }
                );
              } else {
                res.send({
                  success: false,
                  mensaje: result[0][0].mensaje
                });
              }
            })
            ['catch'](function(error) {
              console.log('Error>> Register.enviaRecupera>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'recuperaPassword',
        value: function recuperaPassword(registro, res) {
          var accion = 'R0';
          var params =
            '<params accion= "' +
            accion +
            '" token= "' +
            registro.token +
            '" pass= "' +
            (0, _md['default'])(registro.password) +
            '" />';
          var dataAcess = new _DataAccess['default']();
          dataAcess
            .execArrayToSp('reg_recupera', [params])
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
              console.log('Error>> Register.recuperaPassword>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'password',
        value: function password(registro, res) {
          var params =
            '<params idUsuario= "' +
            registro.idUsuario +
            '" pass= "' +
            (0, _md['default'])(registro.password1) +
            '" pass0= "' +
            (0, _md['default'])(registro.password) +
            '" />';
          var dataAcess = new _DataAccess['default']();
          dataAcess
            .execArrayToSp('reg_password', [params])
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
              console.log('Error>> Register.password>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'registro',
        value: function registro(_registro, res) {
          var token = (0, _md['default'])(_registro.correo + '' + (0, _moment['default'])().format('DDMMYYYYhhmmss'));
          var params =
            '<params idPais= "' +
            _registro.valuePa +
            '" hospedaje = "' +
            _registro.hospedaje +
            '" ciudad = "' +
            _registro.ciudad +
            '" direccion = "' +
            _registro.direccion +
            '" correo = "' +
            _registro.correo +
            '" nombre = "' +
            _registro.nombre +
            '" pass = "' +
            (0, _md['default'])(_registro.password) +
            '" token = "' +
            token +
            '" />';
          var dataAcess = new _DataAccess['default']();
          dataAcess
            .execArrayToSp('reg_registro', [params])
            .then(function(result) {
              if (result[0][0].err == undefined) {
                var claves = 'nombre_usuario:' + _registro.nombre + ';tokenRegistro:' + tokenRegistro;
                enviaCorreo(
                  result[0][0].idHospedaje,
                  claves,
                  'Confirmación de registro',
                  './plantillas/Chaskiy/confirmacion_cuenta',
                  _registro.correo,
                  function(result) {
                    if (!result.success) {
                      console.log('Error>> Register.registro>> Error en el registro de envio de correo');
                    }

                    res.send({
                      success: true,
                      mensaje: 'Usuario activado'
                    });
                  }
                );
              } else {
                res.send({
                  success: false,
                  mensaje: result[0][0].mensaje
                });
              }
            })
            ['catch'](function(error) {
              console.log('Error>> Register.registro>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'isRegister',
        value: function isRegister(usuario, res) {
          var dataAcess = new _DataAccess['default']();
          dataAcess
            .execArrayToSp('reg_isRegister', [usuario])
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
              console.log('Error>> Register.isRegister>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'activaToken',
        value: function activaToken(token, res) {
          var dataAcess = new _DataAccess['default']();
          dataAcess
            .execArrayToSp('reg_activa', [token])
            .then(function(result) {
              console.log('Error>> Register.activaToken>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            })
            ['catch'](function(error) {
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
            });
        }
      }
    ]);

    return Registro;
  })();

var _default = new Registro();

exports['default'] = _default;
