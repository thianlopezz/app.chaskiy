var connection = require('../server/connection');
var md5 = require('md5');

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

  this.registro = function(_registro, res) {

  var param = '<params idPais= "'+ _registro.valuePa
                  +'" hospedaje= "'+ _registro.hospedaje
                  +'" ciudad= "'+ _registro.ciudad
                  +'" direccion= "'+ _registro.direccion
                  +'" correo= "'+ _registro.correo
                  +'" nombre= "'+ _registro.nombre
                  +'" pass= "'+ md5(_registro.password)
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

}

module.exports = new Register();
