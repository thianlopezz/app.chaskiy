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

var Marcacion =
  /*#__PURE__*/
  (function() {
    function Marcacion() {
      _classCallCheck(this, Marcacion);
    }

    _createClass(Marcacion, [
      {
        key: 'get',
        value: (function() {
          var _get = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee(idHospedaje, res) {
              var dataAccess, result;
              return regeneratorRuntime.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        dataAccess = new _DataAccess['default']();
                        _context.prev = 1;
                        _context.next = 4;
                        return dataAccess.execJsonToSp('ma_marcacion', {
                          accion: 'C',
                          idHospedaje: idHospedaje
                        });

                      case 4:
                        result = _context.sent;
                        res.send({
                          success: true,
                          data: result[0]
                        });
                        _context.next = 12;
                        break;

                      case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](1);
                        console.log('Error>> Marcacion.get>>' + _context.t0);
                        res.send({
                          success: false,
                          mensaje: '' + _context.t0
                        });

                      case 12:
                      case 'end':
                        return _context.stop();
                    }
                  }
                },
                _callee,
                null,
                [[1, 8]]
              );
            })
          );

          function get(_x, _x2) {
            return _get.apply(this, arguments);
          }

          return get;
        })()
      },
      {
        key: 'marcar',
        value: (function() {
          var _marcar = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2(params, res) {
              var dataAccess, result;
              return regeneratorRuntime.wrap(
                function _callee2$(_context2) {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        params.feEntrada = (0, _moment['default'])(params.feEntrada).format('YYYY-MM-DD HH:mm:ss');

                        if (params.feSalida) {
                          params.feSalida = (0, _moment['default'])(params.feSalida).format('YYYY-MM-DD HH:mm:ss');
                        }

                        dataAccess = new _DataAccess['default']();
                        _context2.prev = 3;
                        _context2.next = 6;
                        return dataAccess.execJsonToSp('ma_marcacion', params);

                      case 6:
                        result = _context2.sent;

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
                                success: true
                              },
                              result[0][0]
                            )
                          );
                        }

                        _context2.next = 14;
                        break;

                      case 10:
                        _context2.prev = 10;
                        _context2.t0 = _context2['catch'](3);
                        console.log('Error>> Marcacion.marcar>>' + _context2.t0);
                        res.send({
                          success: false,
                          mensaje: '' + _context2.t0
                        });

                      case 14:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                },
                _callee2,
                null,
                [[3, 10]]
              );
            })
          );

          function marcar(_x3, _x4) {
            return _marcar.apply(this, arguments);
          }

          return marcar;
        })()
      }
    ]);

    return Marcacion;
  })();

var _default = new Marcacion();

exports['default'] = _default;
