'use strict';

var _express = _interopRequireDefault(require('express'));

var _Habitacion = _interopRequireDefault(require('../controllers/Habitacion'));

var _Reserva = _interopRequireDefault(require('../controllers/Reserva'));

var _Pais = _interopRequireDefault(require('../controllers/Pais'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var router = _express['default'].Router();

router.get('/', function(req, res) {
  res.send('external works!');
});
router.post('/habitacion/disponible/:idHospedaje', function(req, res) {
  _Habitacion['default'].getDisponibles(req.body.feDesde, req.body.feHasta, req.params.idHospedaje, res);
});
router.post('/reservar', function(req, res) {
  req.body.desdePagina = true;

  _Reserva['default'].mantenimiento(req.body, res);
}); //P A I S E S

router.get('/paises', function(req, res) {
  _Pais['default'].get(res);
});
router.get('/habitaciones/all/:idHospedaje', function(req, res) {
  _Habitacion['default'].get(req.params.idHospedaje, res);
});
router.get('/habitaciones/:idHospedaje/:idHabitacion', function(req, res) {
  _Habitacion['default'].getById(req.params.idHabitacion, req.params.idHospedaje, res);
});
module.exports = router;
