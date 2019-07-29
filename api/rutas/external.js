import express from 'express';
const router = express.Router();

import Habitacion from '../controllers/Habitacion';
import Reserva from '../controllers/Reserva';
import Pais from '../controllers/Pais';

router.get('/', (req, res) => {
  res.send('external works!');
});

router.post('/habitacion/disponible/:idHospedaje', (req, res) => {
  Habitacion.getDisponibles(req.body.feDesde, req.body.feHasta, req.params.idHospedaje, res);
});

router.post('/reservar', (req, res) => {
  req.body.desdePagina = true;
  Reserva.mantenimiento(req.body, res);
});

//P A I S E S
router.get('/paises', (req, res) => {
  Pais.get(res);
});

module.exports = router;
