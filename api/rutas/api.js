const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');

const secret = 'encourage!';

var autenticacion = require('../models/autenticacion');
var habitaciones = require('../models/habitacion');
var aerolineas = require('../models/aerolinea');
var pasajeros = require('../models/pasajero');
var paises = require('../models/pais');
var adicionales = require('../models/adicional');
var reservas = require('../models/reserva');
var formas = require('../models/formapago');
var pagos = require('../models/pago');
var registros = require('../models/registro');
var estadisticas = require('../models/estadistica');
var hospedaje = require('../models/hospedaje');
var social = require('../models/social');
var fuente = require('../models/fuente');
var tarifa = require('../models/tarifa');

// declare axios for making http requests
const axios = require('axios');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works! motherfuckers!');
});

// Get all posts
router.post('/auth/login', (req, res) => {

  autenticacion.logIn(req.body.username, req.body.password, res, function(result){

      if(result.success){
        var token = jwt.sign(result, secret, {
                  expiresIn: "24h"
                });

        result.usuario.token = token;

        res.json(result);
      }
      else{
        res.json(result);
      }

  });

});

// E X T  R E S E R V A
router.get('/reservas/ex/:id/:token', (req, res) => {

  reservas.getByIdEx(req.params.id, req.params.token, res);
});

router.get('/reservas/confirma/:id', (req, res) => {
  
  reservas.confirma(req.params.id, res);
});

//R E G I S T R O
router.post('/register', (req, res) => {

  registros.registro(req.body, res);
});

router.post('/register/isregister', (req, res) => {

  registros.isRegister(req.body.correo, res);
});

router.post('/register/activa', (req, res) => {

  registros.activaToken(req.body.token, res);
});

router.post('/register/enviarecupera', (req, res) => {

  registros.enviaRecupera(req.body, res);
});

router.post('/register/uprecupera', (req, res) => {

  registros.recuperaPassword(req.body, res);
});

//P A I S E S
router.get('/paises/all/:param', (req, res) => {

  paises.get(req.params.param, res);
});

//S O C I A L
router.get('/social/all/:param', (req, res) => {

  social.get(req.params.param, res);
});

// B R O K E R
router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  //var token = req.body.token || req.query.token || req.headers['x-access-token'];
  var token = req.headers['x-access-token'];
  
  if (token) {
    
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        
        return res.json({ success: false, err: -1, mensaje: 'Failed to authenticate token.' });
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
});

// R U T A S  P R I V A D A S

//F U E N T E
router.get('/fuente/all/:param', (req, res) => {

  fuente.get(req.params.param, res);
});

//H O S P E D A J E
router.get('/hospedaje/all/:param', (req, res) => {

  hospedaje.get(req.params.param, res);
});

router.post('/hospedaje', (req, res) => {

  hospedaje.mantenimiento(req.body, res);
});

//P A I S E S
router.get('/statistic/:param', (req, res) => {

  estadisticas.get(req.params.param, res);
});

// P A S S W O R D
router.post('/register/password', (req, res) => {

  registros.password(req.body, res);
});

//I S  L O G G E D
router.get('/auth/islogged/', (req, res) => {

  return res.json({ success: true });
});

//H A B I T A C I O N E S
router.get('/habitaciones/all/:param', (req, res) => {

  habitaciones.get(req.params.param, res);
});

router.post('/habitaciones/', (req, res) => {

  habitaciones.mantenimiento(req.body, res);
});

//A E R O L I N E A S
router.get('/aerolineas/all/:param', (req, res) => {

  aerolineas.get(req.params.param, res);
});

router.post('/aerolineas/', (req, res) => {

  aerolineas.mantenimiento(req.body, res);
});

//P A S A J E R O
router.get('/pasajeros/all/:param', (req, res) => {

  pasajeros.get(req.params.param, res);
});

router.post('/pasajeros/', (req, res) => {

  pasajeros.mantenimiento(req.body, res);
});

//A D I C I O N A L
router.get('/adicionales/all/:param', (req, res) => {

  adicionales.get(req.params.param, res);
});

router.post('/adicionales/', (req, res) => {

  adicionales.mantenimiento(req.body, res);
});

//R E S E R V A
router.get('/reservas/all/:param', (req, res) => {

  reservas.get(req.params.param, res);
});

router.get('/reservas/:param', (req, res) => {

  reservas.getById(req.params.param, res);
});

router.post('/reservas/', (req, res) => {

  reservas.mantenimiento(req.body, res);
});

router.post('/reservas/estado', (req, res) => {

  reservas.cambiaEstado(req.body, res);
});

//F O R M A  P A G O S
router.get('/formapago/all/:param', (req, res) => {

  formas.get(req.params.param, res);
});

router.post('/formapago/', (req, res) => {

  formas.mantenimiento(req.body, res);
});

//P A G O S
router.get('/pago/all/:param', (req, res) => {

  pagos.get(req.params.param, res);
});

router.post('/pago/', (req, res) => {

  pagos.mantenimiento(req.body, res);
});

//T A R I F A
router.get('/tarifa/all/:param', (req, res) => {

  tarifa.get(req.params.param, res);
});

router.get('/tarifa/alltipos/', (req, res) => {
  
  tarifa.getTipos(res);
});

router.post('/tarifa/', (req, res) => {

  tarifa.mantenimiento(req.body, res);
});

module.exports = router;
