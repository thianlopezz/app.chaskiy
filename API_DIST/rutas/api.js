'use strict';

var _express = _interopRequireDefault(require('express'));

var _jsonwebtoken = _interopRequireDefault(require('jsonwebtoken'));

var _multerConfig = require('../helpers/multerConfig');

var _storage = _interopRequireDefault(require('../rutas/storage'));

var _Autenticacion = _interopRequireDefault(require('../controllers/Autenticacion'));

var _Habitacion = _interopRequireDefault(require('../controllers/Habitacion'));

var _TipoHabitacion = _interopRequireDefault(require('../controllers/TipoHabitacion'));

var _Especificacion = _interopRequireDefault(require('../controllers/Especificacion'));

var _Aerolinea = _interopRequireDefault(require('../controllers/Aerolinea'));

var _Pasajero = _interopRequireDefault(require('../controllers/Pasajero'));

var _Pais = _interopRequireDefault(require('../controllers/Pais'));

var _Adicional = _interopRequireDefault(require('../controllers/Adicional'));

var _Reserva = _interopRequireDefault(require('../controllers/Reserva'));

var _FormaPago = _interopRequireDefault(require('../controllers/FormaPago'));

var _Pago = _interopRequireDefault(require('../controllers/Pago'));

var _Registro = _interopRequireDefault(require('../controllers/Registro'));

var _Estadistica = _interopRequireDefault(require('../controllers/Estadistica'));

var _Hospedaje = _interopRequireDefault(require('../controllers/Hospedaje'));

var _Social = _interopRequireDefault(require('../controllers/Social'));

var _Fuente = _interopRequireDefault(require('../controllers/Fuente'));

var _Tarifa = _interopRequireDefault(require('../controllers/Tarifa'));

var _Marcacion = _interopRequireDefault(require('../controllers/Marcacion'));

var _Foto = _interopRequireDefault(require('../controllers/Foto'));

var _Cama = _interopRequireDefault(require('../controllers/Cama'));

var _Agencia = _interopRequireDefault(require('../controllers/Agencia'));

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

var router = _express['default'].Router();

var secret = 'encourage!';

/* GET api listing. */
router.get('/', function(req, res) {
  res.send('api works! motherfuckers!');
}); // Get all posts

router.post('/auth/login', function(req, res) {
  _Autenticacion['default']
    .logIn(req.body.username, req.body.password, res)
    .then(function(result) {
      if (result.success) {
        var token = _jsonwebtoken['default'].sign(result, secret, {
          expiresIn: '24h'
        });

        result.usuario.token = token;
        res.json(result);
      } else {
        res.json(result);
      }
    })
    ['catch'](function(error) {
      return res.json(error);
    });
}); // E X T  R E S E R V A

router.get('/reservas/ex/:id/:token', function(req, res) {
  _Reserva['default'].getByIdEx(req.params.id, req.params.token, res);
});
router.get('/reservas/confirma/:id', function(req, res) {
  _Reserva['default'].confirma(req.params.id, res);
}); //R E G I S T R O

router.post('/register', function(req, res) {
  _Registro['default'].registro(req.body, res);
});
router.post('/register/isregister', function(req, res) {
  _Registro['default'].isRegister(req.body.correo, res);
});
router.post('/register/activa', function(req, res) {
  _Registro['default'].activaToken(req.body.token, res);
});
router.post('/register/enviarecupera', function(req, res) {
  _Registro['default'].enviaRecupera(req.body, res);
});
router.post('/register/uprecupera', function(req, res) {
  _Registro['default'].recuperaPassword(req.body, res);
}); //P A I S E S

router.get('/paises/all/', function(req, res) {
  _Pais['default'].get(res);
}); //S O C I A L

router.get('/social/all/', function(req, res) {
  _Social['default'].get(res);
}); // ===============B R O K E R==================

router.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  //var token = req.body.token || req.query.token || req.headers['x-access-token'];
  var token = req.headers['x-access-token'];

  if (token) {
    _jsonwebtoken['default'].verify(token, secret, function(err, decoded) {
      if (err) {
        return res.json({
          success: false,
          err: -1,
          mensaje: 'Failed to authenticate token.'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      mensaje: 'No token provided.'
    });
  }
}); // R U T A S  P R I V A D A S
//F U E N T E

router.get('/fuente/all/', function(req, res) {
  _Fuente['default'].get(res);
}); //H O S P E D A J E

router.get('/hospedaje/all/:idHabitacion', function(req, res) {
  _Hospedaje['default'].get(req.params.idHabitacion, res);
});
router.post('/hospedaje', function(req, res) {
  _Hospedaje['default'].mantenimiento(req.body, res);
}); // S T A T S

router.post('/statistic/pagos', function(req, res) {
  _Estadistica['default'].getPagos(req.body, res);
});
router.post('/statistic/ocupacion', function(req, res) {
  _Estadistica['default'].getOcupacionPorRango(req.body, res);
});
router.get('/statistic/captacion/:idHospedaje', function(req, res) {
  _Estadistica['default'].getCaptacion(req.params.idHospedaje, res);
}); // P A S S W O R D

router.post('/register/password', function(req, res) {
  _Registro['default'].password(req.body, res);
}); //I S  L O G G E D

router.get('/auth/islogged/', function(req, res) {
  return res.json({
    success: true
  });
}); //H A B I T A C I O N E S

router.get('/habitaciones/all/:idHospedaje', function(req, res) {
  _Habitacion['default'].get(req.params.idHospedaje, res);
});
router.get('/habitaciones/:idHospedaje/:idHabitacion', function(req, res) {
  _Habitacion['default'].getById(req.params.idHabitacion, req.params.idHospedaje, res);
});
router.post('/habitaciones/', function(req, res) {
  _Habitacion['default'].mantenimiento(req.body, res);
});
router.post('/habitaciones/tipo', function(req, res) {
  _Habitacion['default'].saveTipoHabitacion(req.body, res);
});
router.post('/habitaciones/tarifa', function(req, res) {
  _Habitacion['default'].saveTarifa(req.body, res);
});
router.post('/habitaciones/capacidad', function(req, res) {
  _Habitacion['default'].saveCapacidad(req.body, res);
});
router.post('/habitaciones/descripcion/tipohabitacion', function(req, res) {
  _Habitacion['default'].saveDescripcionTipoHabitacion(req.body, res);
});
router.get('/habitaciones/foto/:idHospedaje/:idHabitacion', function(req, res) {
  _Habitacion['default'].getImages(req.params.idHabitacion, req.params.idHospedaje, res);
});
router.post('/habitaciones/foto', function(req, res) {
  _Habitacion['default'].addImage(req.body, res);
});
router.put('/habitaciones/foto/feature', function(req, res) {
  _Habitacion['default'].feature(req.body, res);
});
router.post('/habitaciones/foto/delete', function(req, res) {
  _Habitacion['default'].deleteImage(req.body, res);
});
router.post('/habitaciones/especificacion', function(req, res) {
  _Habitacion['default'].addEspecificacion(req.body, res);
});
router.post('/habitaciones/cama', function(req, res) {
  _Habitacion['default'].addCama(req.body, res);
});
router.post('/habitaciones/especificacion/delete', function(req, res) {
  _Habitacion['default'].deleteEspecificacion(req.body, res);
});
router.post('/habitaciones/cama/delete', function(req, res) {
  _Habitacion['default'].deleteCama(req.body, res);
});
router.get('/habitaciones/tipo', function(req, res) {
  _TipoHabitacion['default'].get(res);
}); // E S P E C I F I C A C I O N

router.get('/especificaciones', function(req, res) {
  _Especificacion['default'].get(res);
}); // C A M A S

router.get('/camas', function(req, res) {
  _Cama['default'].get(res);
}); //A E R O L I N E A S

router.get('/aerolineas/all/', function(req, res) {
  _Aerolinea['default'].get(res);
});
router.post('/aerolineas/', function(req, res) {
  _Aerolinea['default'].mantenimiento(req.body, res);
}); //P A S A J E R O

router.get('/pasajeros/all/:idHospedaje', function(req, res) {
  _Pasajero['default'].get(req.params.idHospedaje, res);
});
router.get('/pasajeros/correo/:correo/:idHospedaje', function(req, res) {
  _Pasajero['default'].getByCorreo(req.params.correo, req.params.idHospedaje, res);
});
router.post('/pasajeros/', function(req, res) {
  _Pasajero['default'].mantenimiento(req.body, res);
}); //A D I C I O N A L

router.get('/adicionales/all/:idHospedaje', function(req, res) {
  _Adicional['default'].get(req.params.idHospedaje, res);
});
router.post('/adicionales/', function(req, res) {
  _Adicional['default'].mantenimiento(req.body, res);
}); //R E S E R V A

router.post('/reservas/all/:accion', function(req, res) {
  _Reserva['default'].get(req.params.accion, req.body, res);
});
router.get('/reservas/:idReserva', function(req, res) {
  _Reserva['default'].getById(req.params.idReserva, res);
});
router.post('/reservas/', function(req, res) {
  _Reserva['default'].mantenimiento(req.body, res);
});
router.post('/reservas/estado', function(req, res) {
  _Reserva['default'].cambiaEstado(req.body, res);
}); // C A M P O S  I N D I V I D U A L E S

router.post('/reservas/individuales', function(req, res) {
  _Reserva['default'].camposIndividuales(req.body, res);
}); //F O R M A  P A G O S

router.get('/formapago/all/', function(req, res) {
  _FormaPago['default'].get(res);
});
router.post('/formapago/', function(req, res) {
  _FormaPago['default'].mantenimiento(req.body, res);
}); //P A G O S

router.get('/pago/all/:idReserva', function(req, res) {
  _Pago['default'].get(req.params.idReserva, res);
});
router.post('/pago/rango/', function(req, res) {
  _Pago['default'].getByRango(req.body, res);
});
router.post('/pago/', function(req, res) {
  _Pago['default'].mantenimiento(req.body, res);
}); //T A R I F A

router.get('/tarifa/all/:idHospedaje', function(req, res) {
  _Tarifa['default'].get(req.params.idHospedaje, res);
});
router.get('/tarifa/alltipos/', function(req, res) {
  _Tarifa['default'].getTipos(res);
});
router.post('/tarifa/', function(req, res) {
  _Tarifa['default'].mantenimiento(req.body, res);
});
router.get('/marcacion/all/:idHospedaje', function(req, res) {
  _Marcacion['default'].get(req.params.idHospedaje, res);
});
router.post('/marcacion/', function(req, res) {
  _Marcacion['default'].marcar(req.body, res);
}); // A G E N C I A

router.get('/agencia/:idHosepdaje/', function(req, res) {
  _Agencia['default'].get(req.params.idHosepdaje, res);
});
router.post('/agencia/', function(req, res) {
  _Agencia['default'].mantenimiento(req.body, res);
}); // G A L E R Y

router.get('/galeria/:idHospedaje', function(req, res) {
  _Foto['default'].get(req.params.idHospedaje, res);
}); // router.post('/galeria/upload', UploadToGallery.single('file'), (req, res) => {
//   let params = { descripcion: req.body.descripcion, idHospedaje: req.body.idHospedaje };
//   if (req.file) {
//     params.archivo = req.file.filename;
//   }
//   Foto.mantenimiento({ ...params, accion: 'I' }, res);
// });

router.post('/galeria/delete', function(req, res) {
  _Foto['default'].mantenimiento(
    _objectSpread({}, req.body, {
      accion: 'D'
    }),
    res
  );
}); // RUTAS DE SUBIDA DE ARCHIVOS A S3

(0, _storage['default'])(router);
module.exports = router;
