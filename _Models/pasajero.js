var connection = require('../server/connection');

function Pasajero() {

  this.get = function(params, res) {
    connection.acquire(function(err, con) {
      con.query('call pa_pasajero(\''+params+'\')', function(err, result) {

        con.release();

        if(err){

          console.log('Error>> Pasajero.get>>' + err);
          res.send({success: false, mensaje: '' + err});
        }

        res.send({success: true, data: result[0]});
      });
    });
  };

  this.mantenimiento = function(habitacion, res) {
    
    var param = '<params accion= "'+ habitacion.accion +'" idHospedaje= "'+ habitacion.idHospedaje 
                    +'" idHabitacion= "'+ habitacion.idHabitacion +'" noHabitacion= "'+ habitacion.noHabitacion +'" nombre= "'+ habitacion.habitacion +'" />';
    //console.log(param);
    connection.acquire(function(err, con) {
      con.query('call hab_habitacion(\''+param+'\')', function(err, result) {
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