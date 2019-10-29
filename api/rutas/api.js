import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';

const secret = 'encourage!';

import { UploadToGallery } from '../helpers/multerConfig';

import Autenticacion from '../controllers/Autenticacion';
import Habitacion from '../controllers/Habitacion';
import TipoHabitacion from '../controllers/TipoHabitacion';
import Especificacion from '../controllers/Especificacion';
import Aerolinea from '../controllers/Aerolinea';
import Pasajero from '../controllers/Pasajero';
import Pais from '../controllers/Pais';
import Adicionales from '../controllers/Adicional';
import Reserva from '../controllers/Reserva';
import FormaPago from '../controllers/FormaPago';
import pagos from '../controllers/Pago';
import Registros from '../controllers/Registro';
import Estadistica from '../controllers/Estadistica';
import Hospedaje from '../controllers/Hospedaje';
import Social from '../controllers/Social';
import Fuente from '../controllers/Fuente';
import Tarifa from '../controllers/Tarifa';
import Marcacion from '../controllers/Marcacion';
import Foto from '../controllers/Foto';
import Cama from '../controllers/Cama';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works! motherfuckers!');
});

// Get all posts
router.post('/auth/login', (req, res) => {
  Autenticacion.logIn(req.body.username, req.body.password, res)
    .then(result => {
      if (result.success) {
        var token = jwt.sign(result, secret, {
          expiresIn: '24h'
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
router.get('/reservas/ex/:id/:token', (req, res) => {
  Reserva.getByIdEx(req.params.id, req.params.token, res);
});

router.get('/reservas/confirma/:id', (req, res) => {
  Reserva.confirma(req.params.id, res);
});

//R E G I S T R O
router.post('/register', (req, res) => {
  Registros.registro(req.body, res);
});

router.post('/register/isregister', (req, res) => {
  Registros.isRegister(req.body.correo, res);
});

router.post('/register/activa', (req, res) => {
  Registros.activaToken(req.body.token, res);
});

router.post('/register/enviarecupera', (req, res) => {
  Registros.enviaRecupera(req.body, res);
});

router.post('/register/uprecupera', (req, res) => {
  Registros.recuperaPassword(req.body, res);
});

//P A I S E S
router.get('/paises/all/', (req, res) => {
  Pais.get(res);
});

//S O C I A L
router.get('/social/all/', (req, res) => {
  Social.get(res);
});

// ===============B R O K E R==================
router.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  //var token = req.body.token || req.query.token || req.headers['x-access-token'];
  var token = req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, secret, function(err, decoded) {
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
});

// R U T A S  P R I V A D A S

//F U E N T E
router.get('/fuente/all/', (req, res) => {
  Fuente.get(res);
});

//H O S P E D A J E
router.get('/hospedaje/all/:idHabitacion', (req, res) => {
  Hospedaje.get(req.params.idHabitacion, res);
});

router.post('/hospedaje', (req, res) => {
  Hospedaje.mantenimiento(req.body, res);
});

// S T A T S
router.post('/statistic/pagos', (req, res) => {
  Estadistica.getPagos(req.body, res);
});

router.post('/statistic/ocupacion', (req, res) => {
  Estadistica.getOcupacionPorRango(req.body, res);
});

router.get('/statistic/captacion/:idHospedaje', (req, res) => {
  Estadistica.getCaptacion(req.params.idHospedaje, res);
});

// P A S S W O R D
router.post('/register/password', (req, res) => {
  Registros.password(req.body, res);
});

//I S  L O G G E D
router.get('/auth/islogged/', (req, res) => {
  return res.json({ success: true });
});

//H A B I T A C I O N E S
router.get('/habitaciones/all/:idHospedaje', (req, res) => {
  Habitacion.get(req.params.idHospedaje, res);
});

router.get('/habitaciones/:idHospedaje/:idHabitacion', (req, res) => {
  Habitacion.getById(req.params.idHabitacion, req.params.idHospedaje, res);
});

router.post('/habitaciones/', (req, res) => {
  Habitacion.mantenimiento(req.body, res);
});

router.post('/habitaciones/tipo', (req, res) => {
  Habitacion.saveTipoHabitacion(req.body, res);
});

router.post('/habitaciones/tarifa', (req, res) => {
  Habitacion.saveTarifa(req.body, res);
});

router.post('/habitaciones/capacidad', (req, res) => {
  Habitacion.saveCapacidad(req.body, res);
});

router.get('/habitaciones/foto/:idHospedaje/:idHabitacion', (req, res) => {
  Habitacion.getImages(req.params.idHabitacion, req.params.idHospedaje, res);
});

router.post('/habitaciones/foto', (req, res) => {
  Habitacion.addImage(req.body, res);
});

router.put('/habitaciones/foto/feature', (req, res) => {
  Habitacion.feature(req.body, res);
});

router.post('/habitaciones/foto/delete', (req, res) => {
  Habitacion.deleteImage(req.body, res);
});

router.post('/habitaciones/especificacion', (req, res) => {
  Habitacion.addEspecificacion(req.body, res);
});

router.post('/habitaciones/cama', (req, res) => {
  Habitacion.addCama(req.body, res);
});

router.post('/habitaciones/especificacion/delete', (req, res) => {
  Habitacion.deleteEspecificacion(req.body, res);
});

router.post('/habitaciones/cama/delete', (req, res) => {
  Habitacion.deleteCama(req.body, res);
});

router.get('/habitaciones/tipo', (req, res) => {
  TipoHabitacion.get(res);
});

// E S P E C I F I C A C I O N
router.get('/especificaciones', (req, res) => {
  Especificacion.get(res);
});

// C A M A S
router.get('/camas', (req, res) => {
  Cama.get(res);
});

//A E R O L I N E A S
router.get('/aerolineas/all/', (req, res) => {
  Aerolinea.get(res);
});

router.post('/aerolineas/', (req, res) => {
  Aerolinea.mantenimiento(req.body, res);
});

//P A S A J E R O
router.get('/pasajeros/all/:idHospedaje', (req, res) => {
  Pasajero.get(req.params.idHospedaje, res);
});

router.get('/pasajeros/correo/:correo/:idHospedaje', (req, res) => {
  Pasajero.getByCorreo(req.params.correo, req.params.idHospedaje, res);
});

router.post('/pasajeros/', (req, res) => {
  Pasajero.mantenimiento(req.body, res);
});

//A D I C I O N A L
router.get('/adicionales/all/:idHospedaje', (req, res) => {
  Adicionales.get(req.params.idHospedaje, res);
});

router.post('/adicionales/', (req, res) => {
  Adicionales.mantenimiento(req.body, res);
});

//R E S E R V A
router.post('/reservas/all/:accion', (req, res) => {
  Reserva.get(req.params.accion, req.body, res);
});

router.get('/reservas/:idReserva', (req, res) => {
  Reserva.getById(req.params.idReserva, res);
});

router.post('/reservas/', (req, res) => {
  Reserva.mantenimiento(req.body, res);
});

router.post('/reservas/estado', (req, res) => {
  Reserva.cambiaEstado(req.body, res);
});

// C A M P O S  I N D I V I D U A L E S
router.post('/reservas/individuales', (req, res) => {
  Reserva.camposIndividuales(req.body, res);
});

//F O R M A  P A G O S
router.get('/formapago/all/', (req, res) => {
  FormaPago.get(res);
});

router.post('/formapago/', (req, res) => {
  FormaPago.mantenimiento(req.body, res);
});

//P A G O S
router.get('/pago/all/:idReserva', (req, res) => {
  pagos.get(req.params.idReserva, res);
});

router.post('/pago/rango/', (req, res) => {
  pagos.getByRango(req.body, res);
});

router.post('/pago/', (req, res) => {
  pagos.mantenimiento(req.body, res);
});

//T A R I F A
router.get('/tarifa/all/:idHospedaje', (req, res) => {
  Tarifa.get(req.params.idHospedaje, res);
});

router.get('/tarifa/alltipos/', (req, res) => {
  Tarifa.getTipos(res);
});

router.post('/tarifa/', (req, res) => {
  Tarifa.mantenimiento(req.body, res);
});

router.get('/marcacion/all/:idHospedaje', (req, res) => {
  Marcacion.get(req.params.idHospedaje, res);
});

router.post('/marcacion/', (req, res) => {
  Marcacion.marcar(req.body, res);
});

// G A L E R Y
router.get('/galeria/:idHospedaje', (req, res) => {
  Foto.get(req.params.idHospedaje, res);
});

router.post('/galeria/upload', UploadToGallery.single('file'), (req, res) => {
  let params = { descripcion: req.body.descripcion, idHospedaje: req.body.idHospedaje };
  if (req.file) {
    params.archivo = req.file.filename;
  }
  Foto.mantenimiento({ ...params, accion: 'I' }, res);
});

router.post('/galeria/delete', (req, res) => {
  Foto.mantenimiento({ ...req.body, accion: 'D' }, res);
});

module.exports = router;
