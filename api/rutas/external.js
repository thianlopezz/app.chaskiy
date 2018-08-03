const express = require('express');
const router = express.Router();

const Habitacion = require('../models/habitacion');
const Reserva = require('../models/reserva');
const Pais = require('../models/pais');

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

    const param = '<params accion="C" />';
    Pais.get(param, res);
});

module.exports = router;
