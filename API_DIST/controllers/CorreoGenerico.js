'use strict';

var _moment = _interopRequireDefault(require('moment'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    if (i % 2) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(
          Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          })
        );
      }
      ownKeys.forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i]));
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

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

var URL_CORREO_GENERICO = process.env.CORREO_GENERICO || 'https://correo.casadcristhi.com'; // const API =
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
        regeneratorRuntime.mark(function _callee(destinatario, claves, cco) {
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

      return function(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    })();

  this.enviarProformaAgencia =
    /*#__PURE__*/
    (function() {
      var _ref4 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(destinatario, claves, cco) {
          var detalleFactura, _ref5, data;

          return regeneratorRuntime.wrap(
            function _callee2$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    _context2.prev = 0;

                    detalleFactura = (function() {
                      var aux = '';
                      claves.habitaciones.forEach(function(habitacion, index) {
                        var noches = (0, _moment['default'])(habitacion.feHasta)
                          .add(1, 'day')
                          .diff((0, _moment['default'])(habitacion.feDesde), 'days');
                        aux += '<tr>\n          <td width="15%" '
                          .concat(index + 1 == claves.habitaciones.length ? 'rowspan="3"' : '', ' align="center">')
                          .concat(noches, '</td>\n          <td width="45%">\n            ')
                          .concat(habitacion.habitacion, '\n            <br />')
                          .concat(habitacion.tarifa, ' <br />Ref. $')
                          .concat((+habitacion.tarifa_valor).toFixed(2), '\n            <p>\n              In: ')
                          .concat((0, _moment['default'])(habitacion.feDesde).format('DD/MM/YYYY'), ' / Out: ')
                          .concat(
                            (0, _moment['default'])(habitacion.feHasta)
                              .add(1, 'day')
                              .format('DD/MM/YYYY'),
                            '\n              <br />'
                          )
                          .concat(+noches + 1, 'D - ')
                          .concat(noches, 'N\n            </p>\n          </td>\n          <td width="20%" ')
                          .concat(index + 1 == claves.habitaciones.length ? 'rowspan="3"' : '', ' >$')
                          .concat((+habitacion.tarifa_valor).toFixed(2), '</td>\n          <td width="20%" ')
                          .concat(index + 1 == claves.habitaciones.length ? 'rowspan="3"' : '', ' >$')
                          .concat((+habitacion.tarifa_valor * +noches).toFixed(2), '</td>\n        </tr>');
                      });
                      return aux.replace(/\n/g, '').replace(/\t/g, '');
                    })();

                    detalleFactura = JSON.stringify(detalleFactura).split('');
                    detalleFactura.shift();
                    detalleFactura.pop();
                    detalleFactura = detalleFactura.join('');
                    claves = _objectSpread({}, claves, {
                      t_subtotal: (+claves.t_subtotal).toFixed(2),
                      t_iva: (+claves.t_iva).toFixed(2),
                      t_total: (+claves.t_total).toFixed(2),
                      detalleFactura: detalleFactura
                    });
                    _context2.next = 9;
                    return axios.post(''.concat(URL_CORREO_GENERICO, '/api/send/v3'), {
                      asunto: 'Profroma #'.concat(claves.idReserva, ' - ').concat(claves.hospedaje),
                      idHospedaje: claves.idHospedaje,
                      destinatario: destinatario,
                      cco: cco,
                      templateId: 'd-361044990fb94526805c0802ffe28054',
                      // TEMPLATE DE SENGRID
                      token: TOKEN_CORREO,
                      claves: claves
                    });

                  case 9:
                    _ref5 = _context2.sent;
                    data = _ref5.data;

                    if (data.success) {
                      console.info('Correo enviado al api correctamente.');
                    } else {
                      console.info('Ocurrio un error enviando el correo hacia el api>> ' + data.mensaje);
                    }

                    _context2.next = 19;
                    break;

                  case 14:
                    _context2.prev = 14;
                    _context2.t0 = _context2['catch'](0);
                    console.log('Error en envio de correo!');
                    console.error(_context2.t0.message);
                    console.trace(_context2.t0);

                  case 19:
                  case 'end':
                    return _context2.stop();
                }
              }
            },
            _callee2,
            null,
            [[0, 14]]
          );
        })
      );

      return function(_x4, _x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    })();
}

module.exports = new CorreoGenerico();
