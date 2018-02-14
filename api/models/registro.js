const DataAcess = require('./DataAccess');
var moment = require('moment');
var md5 = require('md5');

const axios = require('axios');

const API = process.env.CORREO_GENERICO || 'http://localhost:3000';

function Registro() {

  this.enviaRecupera = function (registro, res) {

    var token = md5(registro.correo + '' + moment().format('DDMMYYYYhhmmss'));
    var accion = 'R';

    var params = '<params accion= "' + accion
      + '" correo= "' + registro.correo
      + '" token= "' + token
      + '" />';

    DataAcess.exec_arraysp('reg_recupera', [params], function (error, result) {
      if (error) {
        console.log('Error>> Register.enviaRecupera>>' + error);
        res.send({ success: false, mensaje: error });
      }
      else {
        if (result[0][0].err == undefined) {

          var claves = 'nombre_usuario:' + result[0][0].nombre + ';tokenRecupera:' + tokenRecupera;

          enviaCorreo(result[0][0].idhospedaje, claves, 'Recuperacion de contraseña', './plantillas/Chaskiy/recupera_pass', _registro.correo, function (result) {

            if (!result.success)
              console.log("Error>> Register.enviaRecupera>> Error en el registro de envio de correo");

            res.send({ success: true, mensaje: '' });
          });
        }
        else
          res.send({ success: false, mensaje: result[0][0].mensaje });
      }
    })
  };

  this.recuperaPassword = function (registro, res) {

    var accion = 'R0';

    var params = '<params accion= "' + accion
      + '" token= "' + registro.token
      + '" pass= "' + md5(registro.password)
      + '" />';

    DataAcess.exec_arraysp('reg_recupera', [params], function (error, result) {
      if (error) {
        console.log('Error>> Register.recuperaPassword>>' + error);
        res.send({ success: false, mensaje: error });
      }
      else {
        if (result[0][0].err == undefined)
          res.send({ success: true, mensaje: result[0][0].mensaje });
        else
          res.send({ success: false, mensaje: result[0][0].mensaje });
      }
    })
  };

  this.password = function (registro, res) {

    var param = '<params idusuario= "' + registro.idusuario
      + '" pass= "' + md5(registro.password1)
      + '" pass0= "' + md5(registro.password)
      + '" />';

    DataAcess('reg_password', [params], function (error, result) {
      if (error) {
        console.log('Error>> Register.password>>' + error);
        res.send({ success: false, mensaje: error });
      }
      else {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      }
    })
  };

  this.registro = function (registro, res) {

    var token = md5(registro.correo + '' + moment().format('DDMMYYYYhhmmss'));

    var params = '<params idPais= "' + _registro.valuePa
      + '" hospedaje = "' + _registro.hospedaje
      + '" ciudad = "' + _registro.ciudad
      + '" direccion = "' + _registro.direccion
      + '" correo = "' + _registro.correo
      + '" nombre = "' + _registro.nombre
      + '" pass = "' + md5(_registro.password)
      + '" token = "' + token
      + '" />';

    DataAcess.exec_arraysp('reg_registro', [params], function (error, result) {
      if (error) {
        console.log('Error>> Register.registro>>' + error);
        res.send({ success: false, mensaje: error });
      } else {
        if (result[0][0].err == undefined) {

          var claves = 'nombre_usuario:' + _registro.nombre + ';tokenRegistro:' + tokenRegistro;

          enviaCorreo(result[0][0].idHospedaje, claves, 'Confirmación de registro', './plantillas/Chaskiy/confirmacion_cuenta', _registro.correo, function (result) {

            if (!result.success)
              console.log("Error>> Register.registro>> Error en el registro de envio de correo");

            res.send({ success: true, mensaje: 'Usuario activado' });
          });
        }
        else
          res.send({ success: false, mensaje: result[0][0].mensaje });
      }
    })
  };

  this.isRegister = function (usuario, res) {


    DataAcess.exec_arraysp('reg_isRegister', [usuario], function (error, result) {
      if (error) {
        console.log('Error>> Register.isRegister>>' + error);
        res.send({ success: false, mensaje: error });
      }
      else {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        }
        else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      }
    })
  };

  this.activaToken = function (token, res) {
    
    DataAcess.exec_arraysp('reg_activa', [token], function(error, result){
      if (error) {
        console.log('Error>> Register.activaToken>>' + error);
        res.send({ success: false, mensaje: error });
      }
      else {
        if (result[0][0].err == undefined){
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }          
      }
    })    
  };

  function enviaCorreo(idHospedaje, claves, asunto, plantilla, destinatario, callback) {

    var correo = {
      idHospedaje: idHospedaje,
      asunto: asunto,
      destinatario: destinatario,
      claves: claves,
      plantilla: plantilla
    };

    axios.post(`${API}/api/send`, correo)
      .then(result => {
        callback(result.data);
      })
      .catch(error => {

        console.log("Err>>" + error);
        callback(error);
      });
  }

}

module.exports = new Registro();
