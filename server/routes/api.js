const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../../config.json');

//modelos de base de datos
var auth = require('../../_Models/auth');
//var habitaciones = require('../../_Models/Habitacion');
var aerolineas = require('../../_Models/Aerolinea');
var pasajeros = require('../../_Models/Pasajero');
var paises = require('../../_Models/Pais');
var adicionales = require('../../_Models/Adicional');
var reservas = require('../../_Models/Reserva');

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
                  expiresIn: "2h" // expires in 24 hours
                });

        result.usuario.token = token;

        res.json(result);
      }
      else{
        res.json(result);
      }

  });

});

//P A I S E S
router.get('/paises/all/:param', (req, res) => {
  
  paises.get(req.params.param, res);
});

// B R O K E R
router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
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
        message: 'No token provided.' 
    });
    
  }
});

// R U T A S  P R I V A D A S

//H A B I T A C I O N E S
// router.get('/habitaciones/all/:param', (req, res) => {
  
//   habitaciones.get(req.params.param, res);
// });

// router.post('/habitaciones/', (req, res) => {

//   habitaciones.mantenimiento(req.body, res);
// });

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

module.exports = router;