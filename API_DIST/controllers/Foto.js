'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _DataAccess = _interopRequireDefault(require('./DataAccess'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

var Foto =
  /*#__PURE__*/
  (function() {
    function Foto() {
      _classCallCheck(this, Foto);
    }

    _createClass(Foto, [
      {
        key: 'get',
        value: function get(idHospedaje, res) {
          var dataAcces = new _DataAccess['default']();
          dataAcces
            .execJsonToSp('fo_foto', {
              accion: 'C',
              idHospedaje: idHospedaje
            })
            .then(function(result) {
              res.send({
                success: true,
                data: result[0]
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Foto.get>>' + error);
              res.send({
                success: false,
                mensaje: '' + error.message
              });
            });
        }
      },
      {
        key: 'mantenimiento',
        value: (function() {
          var _mantenimiento = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee(foto, res) {
              var dataAcces, result;
              return regeneratorRuntime.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        dataAcces = new _DataAccess['default']();
                        _context.prev = 1;
                        _context.next = 4;
                        return dataAcces.execJsonToSp('fo_foto', foto);

                      case 4:
                        result = _context.sent;

                        if (!res) {
                          _context.next = 9;
                          break;
                        }

                        if (result[0][0].error == undefined) {
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

                        _context.next = 11;
                        break;

                      case 9:
                        console.log('No res param sent.');
                        return _context.abrupt('return', result);

                      case 11:
                        _context.next = 17;
                        break;

                      case 13:
                        _context.prev = 13;
                        _context.t0 = _context['catch'](1);
                        console.trace(_context.t0);
                        res.send({
                          success: false,
                          mensaje: _context.t0
                        });

                      case 17:
                      case 'end':
                        return _context.stop();
                    }
                  }
                },
                _callee,
                null,
                [[1, 13]]
              );
            })
          );

          function mantenimiento(_x, _x2) {
            return _mantenimiento.apply(this, arguments);
          }

          return mantenimiento;
        })()
      }
    ]);

    return Foto;
  })();

var _default = new Foto();

exports['default'] = _default;
