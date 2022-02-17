'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _DataAccess = _interopRequireDefault(require('./DataAccess'));

var _moment = _interopRequireDefault(require('moment'));

var _CorreoGenerico = _interopRequireDefault(require('./CorreoGenerico'));

var _async = require('rxjs/internal/scheduler/async');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
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

var Reserva =
  /*#__PURE__*/
  (function() {
    function Reserva() {
      _classCallCheck(this, Reserva);

      _defineProperty(
        this,
        'camposIndividuales',
        /*#__PURE__*/
        (function() {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee(reserva, res) {
              var dataAcess, result;
              return regeneratorRuntime.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        if (reserva.notas) {
                          reserva.notas = reserva.notas.replace(/\n/g, '');
                          reserva.notas = reserva.notas.replace(/\t/g, '');
                        }

                        dataAcess = new _DataAccess['default']();
                        _context.prev = 2;
                        _context.next = 5;
                        return dataAcess.execJsonToSp('res_camposIndividuales', reserva);

                      case 5:
                        result = _context.sent;

                        if (result[0][0].error === undefined) {
                          res.send(
                            _objectSpread(
                              {
                                success: true
                              },
                              result[0][0]
                            )
                          );
                        } else {
                          res.send(
                            _objectSpread(
                              {
                                success: false
                              },
                              result[0][0]
                            )
                          );
                        }

                        _context.next = 13;
                        break;

                      case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](2);
                        console.log('Error>> Reserva.mantenimiento>>' + _context.t0);
                        res.send({
                          success: false,
                          mensaje: '' + _context.t0
                        });

                      case 13:
                      case 'end':
                        return _context.stop();
                    }
                  }
                },
                _callee,
                null,
                [[2, 9]]
              );
            })
          );

          return function(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        })()
      );

      _defineProperty(this, 'enviaCorreo', function(datos, accion, estado, desdePagina) {
        return new Promise(function(resolve, reject) {
          var claves = datos;
          var plantilla = '';
          var asunto = '';
          var destinatario = datos.destinatario; // SI ES UNA CREACION DE RESERVA O UNA MODIFICACION

          if (accion === 'I' || accion === 'U') {
            asunto = 'Confirmación de reserva ' + datos.idReserva;
            plantilla = './plantillas/Reservas/confirmacion_reserva'; // SI ES UNA CREACION Y PROFORMA

            if (estado === 'Pr') {
              if (desdePagina) {
                // ENVIAR NOTIFICACION A HOSPEDAJE
                _CorreoGenerico['default'].enviarConfirmacionReservaWebHospedaje(destinatario, claves);

                asunto = 'Reserva';
                plantilla = './plantillas/Reservas/reserva_desde_pagina';
              } else {
                asunto = 'Proforma de reserva ' + datos.idReserva;
                plantilla = './plantillas/Reservas/proforma_reserva';
              }
            } // SI ES UNA CANCELACION DE RESERVA
          } else if (accion === 'D') {
            asunto = 'Cancelación de reserva ' + datos.idReserva;
            plantilla = './plantillas/Reservas/cancelacion_reserva';
          } else if (accion === 'Es') {
            return resolve({
              success: true,
              mensaje: 'Reserva cancelada con éxito'
            });
          }

          _CorreoGenerico['default']
            .enviar(asunto, destinatario, claves, plantilla, datos.idHospedaje)
            .then(
              resolve({
                success: true
              })
            )
            ['catch'](function(error) {
              console.trace('No se pudo enviar el correo>>' + error.message);
              reject(error);
            });
        });
      });

      _defineProperty(this, 'setHabitacionesDate', function(habitaciones) {
        habitaciones.forEach(function(habitacion) {
          habitacion.feDesde = (0, _moment['default'])(habitacion.feDesde).format('YYYY-MM-DD');
          habitacion.feHasta = (0, _moment['default'])(habitacion.feHasta).format('YYYY-MM-DD');
        });
        return habitaciones;
      });

      _defineProperty(
        this,
        'addNotas',
        /*#__PURE__*/
        (function() {
          var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2(data, res) {
              var dataAcess, result;
              return regeneratorRuntime.wrap(
                function _callee2$(_context2) {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        dataAcess = new _DataAccess['default']();
                        _context2.prev = 1;
                        _context2.next = 4;
                        return dataAcess.execJsonToSp('res_addnote', data);

                      case 4:
                        result = _context2.sent;

                        if (result[0][0].err === undefined) {
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

                        _context2.next = 12;
                        break;

                      case 8:
                        _context2.prev = 8;
                        _context2.t0 = _context2['catch'](1);
                        console.log('Error>> Reserva.addNotas>> ' + _context2.t0);
                        res.send({
                          success: false,
                          mensaje: '' + _context2.t0
                        });

                      case 12:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                },
                _callee2,
                null,
                [[1, 8]]
              );
            })
          );

          return function(_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        })()
      );
    }

    _createClass(Reserva, [
      {
        key: 'get',
        value: function get(accion, params, res) {
          params.feDesde = (0, _moment['default'])(params.feDesde).format('YYYY-MM-DD');
          params.feHasta = (0, _moment['default'])(params.feHasta).format('YYYY-MM-DD');
          var dataAcess = new _DataAccess['default']();
          dataAcess
            .execJsonToSp(
              'res_reserva',
              Object.assign(
                {
                  accion: accion
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
              console.log('Error>> Reserva.get>> ' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'getById',
        value: function getById(idReserva, res) {
          var dataAcess = new _DataAccess['default']();
          dataAcess
            .execJsonToSp('res_reserva', {
              accion: 'C1',
              idReserva: idReserva
            })
            .then(function(result) {
              result[0][0].pasajero = result[1][0];
              result[0][0].agencia = result[2][0];
              result[0][0].adicionales = result[3];
              result[0][0].habitaciones = result[4];
              result[0][0].iva = result[5][0];
              result[0][0].notas = result[6];
              res.send({
                success: true,
                data: result[0]
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Reserva.getById>> ' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'mantenimiento',
        value: function mantenimiento(reserva, res) {
          var _this = this;

          var dataAcess = new _DataAccess['default']();

          if (reserva.accion == 'I') {
            if (reserva.notas && _typeof(reserva.notas) == String) {
              reserva.notas = reserva.notas.replace(/\n/g, '');
              reserva.notas = reserva.notas.replace(/\t/g, '');
            } else if (reserva.notas && Array.isArray(reserva.notas)) {
              reserva.notas =
                reserva.notas && reserva.notas[0] && reserva.notas[0].notas
                  ? reserva.notas[0].notas.replace(/\n/g, '')
                  : '';
              reserva.notas = reserva.notas.replace(/\t/g, '');
            }
          }

          if (reserva.idAgencia && !reserva.idPasajero) {
            delete reserva.idPasajero;
          } else if (reserva.idPasajero && !reserva.idAgencia) {
            delete reserva.idAgencia;
          }

          reserva.habitaciones = this.setHabitacionesDate(reserva.habitaciones);
          dataAcess
            .execJsonToSp('res_reserva', reserva)
            .then(
              /*#__PURE__*/
              (function() {
                var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee3(result) {
                    var dataToSend;
                    return regeneratorRuntime.wrap(
                      function _callee3$(_context3) {
                        while (1) {
                          switch ((_context3.prev = _context3.next)) {
                            case 0:
                              if (!(result[0][0].err === undefined)) {
                                _context3.next = 32;
                                break;
                              }

                              if (!reserva.enviarCorreo) {
                                _context3.next = 28;
                                break;
                              }

                              console.info('Se va a enviar el correo.');
                              _context3.prev = 3;
                              dataToSend = result[0][0];

                              if (!(reserva.estado == 'Pr' && reserva.idAgencia)) {
                                _context3.next = 16;
                                break;
                              }

                              if (result[1] && result[1])
                                dataToSend = _objectSpread({}, dataToSend, {
                                  habitaciones: result[1]
                                });
                              if (result[1] && result[2][0])
                                dataToSend = _objectSpread({}, dataToSend, {}, result[2][0]);
                              if (result[2] && result[3][0])
                                dataToSend = _objectSpread({}, dataToSend, {}, result[3][0]);
                              if (result[3] && result[4][0])
                                dataToSend = _objectSpread({}, dataToSend, {}, result[4][0]);
                              dataToSend = _objectSpread({}, dataToSend, {
                                fecha: (0, _moment['default'])().format('DD/MM/YYYY')
                              });
                              console.info('Enviando profroma a agencia.');
                              _context3.next = 14;
                              return _CorreoGenerico['default'].enviarProformaAgencia(
                                dataToSend.destinatario,
                                dataToSend
                              );

                            case 14:
                              _context3.next = 19;
                              break;

                            case 16:
                              console.info('Enviando correo.');
                              _context3.next = 19;
                              return _this.enviaCorreo(dataToSend, reserva.accion, reserva.estado, reserva.desdePagina);

                            case 19:
                              res.send({
                                success: true,
                                mensaje: 'Mantenimiento exitoso',
                                idReserva: result[0][0].idReserva
                              });
                              _context3.next = 26;
                              break;

                            case 22:
                              _context3.prev = 22;
                              _context3.t0 = _context3['catch'](3);
                              console.log('Error>> Reserva.mantenimiento>> ' + _context3.t0.message);
                              res.send({
                                success: true,
                                mensaje: 'Mantenimiento exitoso',
                                idReserva: result[0][0].idReserva
                              });

                            case 26:
                              _context3.next = 30;
                              break;

                            case 28:
                              console.trace('No se debe enviar el correo.');
                              res.send({
                                success: true,
                                mensaje: 'Mantenimiento exitoso',
                                idReserva: result[0][0].idReserva
                              });

                            case 30:
                              _context3.next = 33;
                              break;

                            case 32:
                              res.send({
                                success: false,
                                mensaje: result[0][0].mensaje
                              });

                            case 33:
                            case 'end':
                              return _context3.stop();
                          }
                        }
                      },
                      _callee3,
                      null,
                      [[3, 22]]
                    );
                  })
                );

                return function(_x5) {
                  return _ref3.apply(this, arguments);
                };
              })()
            )
            ['catch'](function(error) {
              console.log('Error>> Reserva.mantenimiento>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'cambiaEstado',
        value: function cambiaEstado(reserva, res) {
          var dataAcess = new _DataAccess['default']();
          dataAcess
            .execJsonToSp('res_cambiaEstado', reserva)
            .then(function(result) {
              if (result[0][0].err === undefined) {
                res.send({
                  success: true,
                  mensaje: 'Mantenimiento exitoso'
                });
              } else {
                res.send({
                  success: false,
                  mensaje: result[0][0].mensaje
                });
              }
            })
            ['catch'](function(error) {
              console.log('Error>> Reserva.cambiaEstado>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'getByIdEx',
        value: function getByIdEx(id, token, res) {
          var dataAcess = new _DataAccess['default']();
          dataAcess
            .execArrayToSp('res_exte', [id, token])
            .then(function(result) {
              if (result[0][0].err === undefined) {
                result[0][0].pasajero = result[1][0];
                result[0][0].adicionales = result[2];
                result[0][0].habitaciones = result[3];
                result[0][0].hospedaje = result[4][0];
                result[0][0].hospedaje.redes = result[5];
                res.send({
                  success: true,
                  data: result[0]
                });
              } else {
                res.send({
                  success: false,
                  mensaje: result[0][0].err
                });
              }
            })
            ['catch'](function(error) {
              console.log('Error>> Reserva.getByIdEx>> ' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'confirma',
        value: function confirma(id, res) {
          var _this2 = this;

          var dataAcess = new _DataAccess['default']();
          dataAcess
            .execArrayToSp('res_confirma', [id])
            .then(function(result) {
              if (result[0][0].err === undefined) {
                _this2
                  .enviaCorreo(result[0][0], 'I', 'Re')
                  .then(function() {
                    return res.send({
                      success: true,
                      mensaje: 'Mantenimiento exitoso'
                    });
                  })
                  ['catch'](function() {
                    return res.send({
                      success: true,
                      mensaje: 'Mantenimiento exitoso'
                    });
                  });
              } else {
                res.send({
                  success: false,
                  mensaje: result[0][0].mensaje
                });
              }
            })
            ['catch'](function(error) {
              console.log('Error>> Reserva.confirma>> ' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      }
    ]);

    return Reserva;
  })();

var _default = new Reserva();

exports['default'] = _default;
