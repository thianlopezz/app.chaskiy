var connection = require('../server/connection');
var md5 = require('md5');

function auth() {

  this.logIn = function(usuario, password, res, callback) {
    
    connection.acquire(function(err, con) {
      con.query('call seg_login(\''+ usuario +'\', \''+ md5(password) +'\')', function(err, result) {
        try{

          con.release();
          if(err){

            console.log('Error>> auth.logIn>>' + err);
            return callback({success: false, mensaje: '' + err});
          }

          if(result[0][0].err == undefined)
              return callback({success: true, usuario: result[0][0]});
          else
              return callback({success: false, mensaje: result[0][0].mensaje});
        }
        catch(ex){

          console.log('Error>> ex>> auth.logIn>>' + ex);
          return {success:false, mensaje: ex};
        }

      });
    });
  };

  this.getUsuarios = function(criterio, res) {
    connection.acquire(function(err, con) {
      con.query('call Proc_usuario(\''+criterio+'\')', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.mantenimientoUsuario = function(criterio, res) {
    connection.acquire(function(err, con) {
      con.query('call Proc_usuario(\''+criterio+'\')', function(err, result) {

        con.release();
        if(result[0][0].CodErr=='0000')
            res.send({success:true});
        else
            res.send({success:false, data: result[0][0].Mensaje});

      });
    });
  };

  this.cambioContra = function(criterio, res) {
    connection.acquire(function(err, con) {
      con.query('call Proc_usuario(\''+criterio+'\')', function(err, result) {

        con.release();
        if(result[0][0].CodErr=='0000')
            res.send({success:true});
        else
            res.send({success:false, data: result[0][0].Mensaje});

      });
    });
  };

}

module.exports = new auth();
