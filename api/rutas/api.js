const express = require("express");
const router = express.Router();
var jwt = require("jsonwebtoken");

const secret = "encourage!";

const autenticacion = require("../models/autenticacion");
const habitaciones = require("../models/habitacion");
const aerolineas = require("../models/aerolinea");
const pasajeros = require("../models/pasajero");
const paises = require("../models/pais");
const adicionales = require("../models/adicional");
const reservas = require("../models/reserva");
const formas = require("../models/formapago");
const pagos = require("../models/pago");
const registros = require("../models/registro");
const estadisticas = require("../models/estadistica");
const hospedaje = require("../models/hospedaje");
const social = require("../models/social");
const fuente = require("../models/fuente");
const tarifa = require("../models/tarifa");
const marcacion = require("../models/marcacion");

/* GET api listing. */
router.get("/", (req, res) => {
  res.send("api works! motherfuckers!");
});

// Get all posts
router.post("/auth/login", (req, res) => {
  autenticacion
    .logIn(req.body.username, req.body.password, res)
    .then(result => {
      if (result.success) {
        var token = jwt.sign(result, secret, {
          expiresIn: "24h"
        });

        result.usuario.token = token;

        res.json(result);
      } else {
        res.json(result);
      }
    })
    .catch(error => res.json(error));
});

// E X T  R E S E R V A
router.get("/reservas/ex/:id/:token", (req, res) => {
  reservas.getByIdEx(req.params.id, req.params.token, res);
});

router.get("/reservas/confirma/:id", (req, res) => {
  reservas.confirma(req.params.id, res);
});

//R E G I S T R O
router.post("/register", (req, res) => {
  registros.registro(req.body, res);
});

router.post("/register/isregister", (req, res) => {
  registros.isRegister(req.body.correo, res);
});

router.post("/register/activa", (req, res) => {
  registros.activaToken(req.body.token, res);
});

router.post("/register/enviarecupera", (req, res) => {
  registros.enviaRecupera(req.body, res);
});

router.post("/register/uprecupera", (req, res) => {
  registros.recuperaPassword(req.body, res);
});

//P A I S E S
router.get("/paises/all/", (req, res) => {
  paises.get(res);
});

//S O C I A L
router.get("/social/all/", (req, res) => {
  social.get(res);
});

// B R O K E R
router.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  //var token = req.body.token || req.query.token || req.headers['x-access-token'];
  var token = req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        return res.json({
          success: false,
          err: -1,
          mensaje: "Failed to authenticate token."
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
      mensaje: "No token provided."
    });
  }
});

// R U T A S  P R I V A D A S

//F U E N T E
router.get("/fuente/all/", (req, res) => {
  fuente.get(res);
});

//H O S P E D A J E
router.get("/hospedaje/all/:idHabitacion", (req, res) => {
  hospedaje.get(req.params.idHabitacion, res);
});

router.post("/hospedaje", (req, res) => {
  hospedaje.mantenimiento(req.body, res);
});

// S T A T S
router.post("/statistic/pagos", (req, res) => {
  estadisticas.getPagos(req.body, res);
});

router.post("/statistic/ocupacion", (req, res) => {
  estadisticas.getOcupacionPorRango(req.body, res);
});

router.get("/statistic/captacion/:idHospedaje", (req, res) => {
  estadisticas.getCaptacion(req.params.idHospedaje, res);
});

// P A S S W O R D
router.post("/register/password", (req, res) => {
  registros.password(req.body, res);
});

//I S  L O G G E D
router.get("/auth/islogged/", (req, res) => {
  return res.json({ success: true });
});

//H A B I T A C I O N E S
router.get("/habitaciones/all/:idHospedaje", (req, res) => {
  habitaciones.get(req.params.idHospedaje, res);
});

router.post("/habitaciones/", (req, res) => {
  habitaciones.mantenimiento(req.body, res);
});

//A E R O L I N E A S
router.get("/aerolineas/all/", (req, res) => {
  aerolineas.get(res);
});

router.post("/aerolineas/", (req, res) => {
  aerolineas.mantenimiento(req.body, res);
});

//P A S A J E R O
router.get("/pasajeros/all/:idHospedaje", (req, res) => {
  pasajeros.get(req.params.idHospedaje, res);
});

router.get("/pasajeros/correo/:correo/:idHospedaje", (req, res) => {
  pasajeros.getByCorreo(req.params.correo, req.params.idHospedaje, res);
});

router.post("/pasajeros/", (req, res) => {
  pasajeros.mantenimiento(req.body, res);
});

//A D I C I O N A L
router.get("/adicionales/all/:idHospedaje", (req, res) => {
  adicionales.get(req.params.idHospedaje, res);
});

router.post("/adicionales/", (req, res) => {
  adicionales.mantenimiento(req.body, res);
});

//R E S E R V A
router.post("/reservas/all/:accion", (req, res) => {
  reservas.get(req.params.accion, req.body, res);
});

router.get("/reservas/:idReserva", (req, res) => {
  reservas.getById(req.params.idReserva, res);
});

router.post("/reservas/", (req, res) => {
  reservas.mantenimiento(req.body, res);
});

router.post("/reservas/estado", (req, res) => {
  reservas.cambiaEstado(req.body, res);
});

//F O R M A  P A G O S
router.get("/formapago/all/", (req, res) => {
  formas.get(res);
});

router.post("/formapago/", (req, res) => {
  formas.mantenimiento(req.body, res);
});

//P A G O S
router.get("/pago/all/:idReserva", (req, res) => {
  pagos.get(req.params.idReserva, res);
});

router.post("/pago/rango/", (req, res) => {
  pagos.getByRango(req.body, res);
});

router.post("/pago/", (req, res) => {
  pagos.mantenimiento(req.body, res);
});

//T A R I F A
router.get("/tarifa/all/:idHospedaje", (req, res) => {
  tarifa.get(req.params.idHospedaje, res);
});

router.get("/tarifa/alltipos/", (req, res) => {
  tarifa.getTipos(res);
});

router.post("/tarifa/", (req, res) => {
  tarifa.mantenimiento(req.body, res);
});

router.get("/marcacion/all/:idHospedaje", (req, res) => {
  marcacion.get(req.params.idHospedaje, res);
});

router.post("/marcacion/", (req, res) => {
  marcacion.marcar(req.body, res);
});

module.exports = router;
