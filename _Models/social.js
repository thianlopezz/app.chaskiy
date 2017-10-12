var connection = require('../server/connection');

function Social() {

  this.get = function(params, res) {
    connection.acquire(function(err, con) {
      con.query('call cat_social(\''+params+'\')', function(err, result) {
        try{

          con.release();

          if(err){

            console.log('Error>> Social.get>>' + err);
            res.send({success: false, mensaje: '' + err});
          }
          else
            res.send({success: true, data: result[0]});
        }
        catch(ex){

          console.log('Error>> ex>> Social.get>> ' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  this.mantenimiento = function(social, res) {

    var param = '<params accion= "'+ habitacion.accion +'" idHospedaje= "'+ habitacion.idHospedaje
                    +'" idHabitacion= "'+ habitacion.idHabitacion +'" noHabitacion= "'+ habitacion.noHabitacion +'" nombre= "'+ habitacion.habitacion +'" />';
    //console.log(param);
    connection.acquire(function(err, con) {
      con.query('call cat_social(\''+param+'\')', function(err, result) {
        try{

          con.release();
          if (err) {
            console.log('Error>> Social.mantenimiento>>' + err);
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
          console.log('Error>> ex>> Social.mantenimiento>>' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

}

module.exports = new Social();
