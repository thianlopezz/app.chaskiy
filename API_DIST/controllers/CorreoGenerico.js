'use strict';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

var axios = require('axios');

var URL_CORREO_GENERICO = process.env.CORREO_GENERICO || 'http://localhost:3000'; // const API =
//   process.env.CORREO_GENERICO || "https://correo-generico.herokuapp.com";

var TOKEN_CORREO = process.env.TOKEN_CORREO || '123';

function CorreoGenerico() {
  this.enviar = function(asunto, destinatario, claves, plantilla, idHospedaje) {
    var correo = {
      idHospedaje: idHospedaje,
      asunto: asunto,
      destinatario: destinatario,
      claves: claves,
      plantilla: plantilla,
      token: TOKEN_CORREO
    };
    return new Promise(function(resolve, reject) {
      axios
        .post(''.concat(URL_CORREO_GENERICO, '/api/send/v2'), correo)
        .then(function(_ref) {
          var data = _ref.data;

          if (data.success) {
            console.trace('Correo enviado al api correctamente.');
          } else {
            console.trace('Ocurrio error en api>> ' + data.mensaje);
          }

          resolve(correo);
        })
        ['catch'](function(error) {
          console.log('Err>>' + error);
          reject(error);
        });
    });
  };

  this.enviarConfirmacionReservaWebHospedaje =
    /*#__PURE__*/
    (function() {
      var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(destinatario, claves) {
          var _ref3, data;

          return regeneratorRuntime.wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return axios.post(''.concat(URL_CORREO_GENERICO, '/api/send/v3'), {
                      asunto: 'Se registró una nueva reserva desde la página web',
                      destinatario: destinatario,
                      templateId: 'd-9153c95dedc340f29af09c3ba56a9888',
                      // TEMPLATE DE SENGRID
                      token: TOKEN_CORREO,
                      claves: claves
                    });

                  case 3:
                    _ref3 = _context.sent;
                    data = _ref3.data;

                    if (data.success) {
                      console.trace('Correo enviado al api correctamente.');
                    } else {
                      console.trace('Ocurrio un error enviando el correo hacia el api>> ' + data.mensaje);
                    }

                    _context.next = 12;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context['catch'](0);
                    console.log('Error en envio de correo!');
                    console.log(_context.t0);

                  case 12:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            _callee,
            null,
            [[0, 8]]
          );
        })
      );

      return function(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    })();
}

module.exports = new CorreoGenerico();
