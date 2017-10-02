var connection = require('../server/connection');

function Pasajero() {

  this.get = function(params, res) {
    connection.acquire(function(err, con) {
      con.query('call pa_pasajero(\''+params+'\')', function(err, result) {
        try{

          con.release();

          if(err){

            console.log('Error>> Pasajero.get>>' + err);
            res.send({success: false, mensaje: '' + err});
          }
          else
            res.send({success: true, data: result[0]});
        }
        catch(ex){

          console.log('Error>> ex>> Pasajero.get>> ' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  this.mantenimiento = function(pass, res) {

    var param = '<params accion= "'+ pass.accion
                    +'" idUsuario= "'+ pass.idUsuario
                    +'" idPasajero= "'+ pass.idPasajero
                    +'" nombre= "'+ pass.pasajero
                    +'" correo= "'+ pass.correo
                    +'" idPais= "'+ pass.valuePa
                    +'" noContacto= "'+ pass.noContacto
                    +'" idHospedaje= "'+ pass.idHospedaje
                    +'" />';

    // console.log(param);
    connection.acquire(function(err, con) {
      con.query('call pa_pasajero(\''+param+'\')', function(err, result) {
        try{

          con.release();
          if (err) {
            console.log('Error>> Habitacion.mantenimiento>>' + err);
            res.send({success: false, mensaje: ''+ err});
          }
          else {
            if(result[0][0].err == undefined)
              res.send({success: true, mensaje: result[0][0].mensaje});
            else
              res.send({success: false, mensaje: result[0][0].mensaje});
          }
        }
        catch(ex){
          console.log('Error>> ex>> Habitacion.mantenimiento>>' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

}

module.exports = new Pasajero();
