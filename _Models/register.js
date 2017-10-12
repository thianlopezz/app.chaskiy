var connection = require('../server/connection');
var moment = require('moment');
var md5 = require('md5');

const axios = require('axios');

const API = process.env.CORREO_GENERICO || 'http://localhost:3000';

function Register() {

  // this.get = function(params, res) {
  //   connection.acquire(function(err, con) {
  //     con.query('call cat_pais(\''+params+'\')', function(err, result) {
  //       try{
  //
  //         con.release();
  //
  //         if(err){
  //
  //           console.log('Error>> Pago.get>>' + err);
  //           res.send({success: false, mensaje: '' + err});
  //         }
  //         res.send(result[0]);
  //       }
  //       catch(ex){
  //
  //         console.log('Error>> ex>> Pais.get>> ' + ex);
  //         res.send({success: false, mensaje: ex});
  //       }
  //     });
  //   });
  // };

  this.enviaRecupera = function(_registro, res) {

  var tokenRecupera = md5(_registro.correo + '' + moment().format('DDMMYYYYhhmmss'));
  var accion = 'R';

  var param = '<params accion= "'+ accion
                  +'" correo= "'+ _registro.correo
                  +'" tokenRecupera= "'+ tokenRecupera
                  +'" />';

    console.log('recupera_pass>> ' + param);

    connection.acquire(function(err, con) {
      con.query('call reg_recupera(\''+param+'\')', function(err, result) {
        try{

          con.release();
          if (err) {
            console.log('Error>> Register.enviaRecupera>>' + err);
            res.send({success: false, mensaje: err});
          }
          else {
            if(result[0][0].err == undefined){

                var claves = 'nombre_usuario:' + result[0][0].nombre + ';tokenRecupera:' + tokenRecupera;

                enviaCorreo(result[0][0].idHospedaje, claves, 'Recuperacion de contraseña', './plantillas/Chaskiy/recupera_pass', _registro.correo, function(result){

                  if(!result.success)
                    console.log("Error>> Register.enviaRecupera>> Error en el registro de envio de correo");

                  res.send({success: true, mensaje: ''});
                });
            }
            else
              res.send({success: false, mensaje: result[0][0].mensaje});
          }
        }
        catch(ex){

          console.log('Error>> ex>> Register.enviaRecupera>>' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  this.recuperaPassword = function(_registro, res) {

  var accion = 'R0';

  var param = '<params accion= "'+ accion
                  +'" tokenRecupera= "'+ _registro.tokenRecupera
                  +'" pass= "'+ md5(_registro.password)
                  +'" />';

    connection.acquire(function(err, con) {
      con.query('call reg_recupera(\''+param+'\')', function(err, result) {
        try{

          con.release();
          if (err) {
            console.log('Error>> Register.recuperaPassword>>' + err);
            res.send({success: false, mensaje: err});
          }
          else {
            if(result[0][0].err == undefined)
              res.send({success: true, mensaje: result[0][0].mensaje});
            else
              res.send({success: false, mensaje: result[0][0].mensaje});
          }
        }
        catch(ex){

          console.log('Error>> ex>> Register.recuperaPassword>>' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  this.password = function(_registro, res) {

  var param = '<params idUsuario= "'+ _registro.idUsuario
                  +'" pass= "'+ md5(_registro.password1)
                  +'" pass0= "'+ md5(_registro.password)
                  +'" />';

    console.log('reg_password>> ' + param);

    connection.acquire(function(err, con) {
      con.query('call reg_password(\''+param+'\')', function(err, result) {
        try{

          con.release();
          if (err) {
            console.log('Error>> Register.password>>' + err);
            res.send({success: false, mensaje: err});
          }
          else {
            if(result[0][0].err == undefined)
              res.send({success: true, mensaje: result[0][0].mensaje});
            else
              res.send({success: false, mensaje: result[0][0].mensaje});
          }
        }
        catch(ex){

          console.log('Error>> ex>> Register.registro>>' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  this.registro = function(_registro, res) {

  var tokenRegistro = md5(_registro.correo + '' + moment().format('DDMMYYYYhhmmss'));

  var param = '<params idPais= "'+ _registro.valuePa
                  +'" hospedaje= "'+ _registro.hospedaje
                  +'" ciudad= "'+ _registro.ciudad
                  +'" direccion= "'+ _registro.direccion
                  +'" correo= "'+ _registro.correo
                  +'" nombre= "'+ _registro.nombre
                  +'" pass= "'+ md5(_registro.password)
                  +'" tokenRegistro= "'+ tokenRegistro
                  +'" />';

    console.log('reg_registro>> ' + param);

    connection.acquire(function(err, con) {
      con.query('call reg_registro(\''+param+'\')', function(err, result) {
        try{

          con.release();
          if (err) {
            console.log('Error>> Register.registro>>' + err);
            res.send({success: false, mensaje: err});
          }
          else {
            if(result[0][0].err == undefined){

              var claves = 'nombre_usuario:' + _registro.nombre + ';tokenRegistro:' + tokenRegistro;

              enviaCorreo(result[0][0].idHospedaje, claves, 'Confirmación de registro', './plantillas/Chaskiy/confirmacion_cuenta', _registro.correo, function(result){

                if(!result.success)
                  console.log("Error>> Register.registro>> Error en el registro de envio de correo");

                res.send({success: true, mensaje: 'Usuario activado'});
              });
            }
            else
              res.send({success: false, mensaje: result[0][0].mensaje});
          }
        }
        catch(ex){
          console.log('Error>> ex>> Register.registro>>' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  this.isRegister = function(usuario, res) {

    console.log('reg_isRegister>> ' + usuario);

    connection.acquire(function(err, con) {
      con.query('call reg_isRegister(\''+usuario+'\')', function(err, result) {
        try{

          con.release();
          if (err) {
            console.log('Error>> Register.isRegister>>' + err);
            res.send({success: false, mensaje: err});
          }
          else {
            if(result[0][0].err == undefined)
              res.send({success: true, mensaje: result[0][0].mensaje});
            else
              res.send({success: false, mensaje: result[0][0].mensaje});
          }
        }
        catch(ex){
          console.log('Error>> ex>> Register.isRegister>>' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  this.activaToken = function(token, res) {

    console.log('token>> ' + token);

    connection.acquire(function(err, con) {
      con.query('call reg_activa(\''+token+'\')', function(err, result) {
        try{

          con.release();
          if (err) {
            console.log('Error>> Register.activaToken>>' + err);
            res.send({success: false, mensaje: err});
          }
          else {
            if(result[0][0].err == undefined)
              res.send({success: true, mensaje: result[0][0].mensaje});
            else
              res.send({success: false, mensaje: result[0][0].mensaje});
          }
        }
        catch(ex){
          console.log('Error>> ex>> Register.activaToken>>' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  function enviaCorreo(idHospedaje, claves, asunto, plantilla, destinatario, callback){

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

module.exports = new Register();
