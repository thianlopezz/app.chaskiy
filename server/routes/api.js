const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../../config.json');

//modelos de base de datos
var auth = require('../../_Models/auth');
var habitaciones = require('../../_Models/habitacion');
var aerolineas = require('../../_Models/aerolinea');
var pasajeros = require('../../_Models/pasajero');
var paises = require('../../_Models/pais');
var adicionales = require('../../_Models/adicional');
var reservas = require('../../_Models/reserva');
var formas = require('../../_Models/formapago');
var pagos = require('../../_Models/pago');
var register = require('../../_Models/register');
var statistic = require('../../_Models/statistic');

// declare axios for making http requests
const axios = require('axios');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.post('/auth/login', (req, res) => {

  auth.logIn(req.body.username, req.body.password, res, function(result){

      if(result.success){
        var token = jwt.sign(result, config.secret, {
                  expiresIn: "24h" // expires in 24 hours
                });

        result.usuario.token = token;

        res.json(result);
      }
      else{
        res.json(result);
      }

  });

});

//R E G I S T R O
router.post('/register', (req, res) => {

  register.registro(req.body, res);
});

router.post('/register/isregister', (req, res) => {

  register.isRegister(req.body.correo, res);
});

router.post('/register/activa', (req, res) => {

  register.activaToken(req.body.token, res);
});

router.post('/register/enviarecupera', (req, res) => {

  register.enviaRecupera(req.body, res);
});

router.post('/register/uprecupera', (req, res) => {

  register.recuperaPassword(req.body, res);
});

//P A I S E S
router.get('/paises/all/:param', (req, res) => {

  paises.get(req.params.param, res);
});

// B R O K E R
router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  //var token = req.body.token || req.query.token || req.headers['x-access-token'];
  var token = req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {

        return res.json({ success: false, err: -1, mensaje: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
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

//P A I S E S
router.get('/statistic/:param', (req, res) => {

  statistic.get(req.params.param, res);
});

// P A S S W O R D
router.post('/register/password', (req, res) => {

  register.password(req.body, res);
});

//H A B I T A C I O N E S
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

module.exports = router;
