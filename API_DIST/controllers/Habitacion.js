'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _DataAccess = _interopRequireDefault(require('./DataAccess'));

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

var Habitacion =
  /*#__PURE__*/
  (function() {
    function Habitacion() {
      _classCallCheck(this, Habitacion);
    }

    _createClass(Habitacion, [
      {
        key: 'get',
        value: function get(idHospedaje, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_habitacion', {
              accion: 'C',
              idHospedaje: idHospedaje
            })
            .then(function(result) {
              var habitaciones = result[0].map(function(habitacion) {
                return _objectSpread({}, habitacion, {
                  variantes: result[1].filter(function(tipo) {
                    return (tipo.idHabitacion = habitacion.idHabitacion);
                  })
                });
              });
              res.send({
                success: true,
                data: habitaciones
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Habitacion.get>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'getById',
        value: function getById(idHabitacion, idHospedaje, res) {
          var _this = this;

          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_habitacion', {
              accion: 'C1',
              idHabitacion: idHabitacion,
              idHospedaje: idHospedaje
            })
            .then(function(result) {
              if (!result[0] || !result[0][0]) {
                return res.status(404).send({
                  success: false
                });
              }

              var data = result[0][0];
              data.especificaciones = result[1];
              data.fotos = result[2];
              data.foto = _this.getFeaturedFoto(data.fotos);
              data.variantes = _this.getVariantes(result[3], result[4]);
              res.send({
                success: true,
                data: data
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Habitacion.getById>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'getDisponibles',
        value: function getDisponibles(feDesde, feHasta, idHospedaje, res) {
          var dataAccess = new _DataAccess['default']();
          var formato = 'DD[/]MM[/]YYYY';

          if (
            !(0, _moment['default'])(feDesde, formato).isValid() ||
            !(0, _moment['default'])(feHasta, formato).isValid()
          ) {
            return res.status(404).send({
              success: false,
              mensaje: 'Las fechas no son válidas.'
            });
          }

          dataAccess
            .execArrayToSp('hab_disponibles', [feDesde, feHasta, idHospedaje])
            .then(function(result) {
              var habitaciones = result[0].map(function(habitacion) {
                return _objectSpread({}, habitacion, {
                  variantes: result[1].filter(function(tipo) {
                    return tipo.idHabitacion == habitacion.idHabitacion;
                  })
                });
              });
              res.send({
                success: true,
                data: habitaciones
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Habitacion.getDisponibles>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'mantenimiento',
        value: function mantenimiento(habitacion, res) {
          var dataAccess = new _DataAccess['default']();
          habitacion = _objectSpread({}, habitacion, {
            idTipoHabitacion: habitacion.idTipoHabitacion || 0
          });
          dataAccess
            .execJsonToSp('hab_habitacion', habitacion)
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
              console.log('Error>> Habitacion.mantenimiento>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'getImages',
        value: function getImages(idHabitacion, idHospedaje, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_foto', {
              accion: 'C',
              idHospedaje: idHospedaje,
              idHabitacion: idHabitacion
            })
            .then(function(result) {
              res.send({
                success: true,
                data: result[0]
              });
            })
            ['catch'](function(error) {
              console.log('Error>> Habitacion.getImages>>' + error);
              res.send({
                success: false,
                mensaje: '' + error
              });
            });
        }
      },
      {
        key: 'addImage',
        value: function addImage(params, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp(
              'hab_foto',
              _objectSpread(
                {
                  accion: 'I'
                },
                params
              )
            )
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
              console.log('Error>> Habitacion.addImage ==> ', error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'feature',
        value: function feature(params, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_featureFoto', _objectSpread({}, params))
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
              console.log('Error>> Habitacion.feature>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'addEspecificacion',
        value: function addEspecificacion(params, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_addEspecificacion', _objectSpread({}, params))
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
              console.log('Error>> Habitacion.addEspecificacion ==> ' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'addCama',
        value: function addCama(params, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_addCama', _objectSpread({}, params))
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
              console.log('Error>> Habitacion.addCama ==> ' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'deleteEspecificacion',
        value: function deleteEspecificacion(params, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_deleteEspecificacion', _objectSpread({}, params))
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
              console.log('Error>> Habitacion.deleteEspecificacion ==> ', error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'deleteCama',
        value: function deleteCama(params, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_deleteCama', _objectSpread({}, params))
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
              console.log('Error>> Habitacion.deleteEspecificacion ==> ', error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'deleteImage',
        value: function deleteImage(params, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp(
              'hab_foto',
              _objectSpread(
                {
                  accion: 'D'
                },
                params
              )
            )
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
              console.log('Error>> Habitacion.addImage ==> ', error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'saveTipoHabitacion',
        value: function saveTipoHabitacion(params, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_saveTipoHabitacion', _objectSpread({}, params))
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
              console.log('Error>> Habitacion.saveTipoHabitacion>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'saveTarifa',
        value: function saveTarifa(params, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_saveTarifa', _objectSpread({}, params))
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
              console.log('Error>> Habitacion.saveTarifa>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'saveCapacidad',
        value: function saveCapacidad(params, res) {
          var dataAccess = new _DataAccess['default']();
          dataAccess
            .execJsonToSp('hab_saveCapacidad', _objectSpread({}, params))
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
              console.log('Error>> Habitacion.saveCapacidad>>' + error);
              res.send({
                success: false,
                mensaje: error
              });
            });
        }
      },
      {
        key: 'getFeaturedFoto',
        value: function getFeaturedFoto() {
          var fotos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var foto = fotos.find(function(foto) {
            return foto.featured == 1;
          });

          if (foto) {
            return foto.archivo;
          } else if (fotos[0]) {
            return fotos[0].archivo;
          } else return null;
        }
      },
      {
        key: 'getVariantes',
        value: function getVariantes(habitacionTipoHabitacion, habitacionCama) {
          return habitacionTipoHabitacion.map(function(item) {
            return _objectSpread({}, item, {
              camas: habitacionCama.filter(function(habCama) {
                return habCama.idHabitacion == item.idHabitacion && habCama.idTipoHabitacion == item.idTipoHabitacion;
              })
            });
          });
        }
      }
    ]);

    return Habitacion;
  })();

var _default = new Habitacion();

exports['default'] = _default;
