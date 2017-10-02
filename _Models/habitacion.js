var connection = require('../server/connection');

function Habitacion() {

  this.get = function(params, res) {
    connection.acquire(function(err, con) {
      con.query('call hab_habitacion(\''+params+'\')', function(err, result) {
        try{

          con.release();

          if(err){

            console.log('Error>> Habitacion.get>>' + err);
            res.send({success: false, mensaje: '' + err});
          }
          else
            res.send(result[0]);
        }
        catch(ex){

          console.log('Error>> ex>> Habitacion.get>> ' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  this.mantenimiento = function(habitacion, res) {

    habitacion.idHabitacion = habitacion.idHabitacion || 0;

    var param = '<params accion= "'+ habitacion.accion +'" idHospedaje= "'+ habitacion.idHospedaje
                    +'" idHabitacion= "'+ habitacion.idHabitacion
                    +'" noHabitacion= "'+ habitacion.noHabitacion
                    +'" tarifa= "'+ habitacion.tarifa
                    +'" nombre= "'+ habitacion.habitacion +'" />';
    //console.log(param);
    connection.acquire(function(err, con) {
      con.query('call hab_habitacion(\''+param+'\')', function(err, result) {
        try{

          con.release();
          if (err) {
            console.log('Error>> Habitacion.mantenimiento>>' + err);
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
          console.log('Error>> ex>> Habitacion.mantenimiento>>' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

}

module.exports = new Habitacion();
