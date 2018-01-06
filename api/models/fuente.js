var connection = require('../connection');

function Fuente() {

  this.get = function(params, res) {
    connection.acquire(function(err, con) {
      con.query('call cat_fuente(\''+params+'\')', function(err, result) {
        try{

          con.release();

          if(err){

            console.log('Error>> Fuente.get>>' + err);
            res.send({success: false, mensaje: '' + err});
          }
          else
            res.send({success: true, data: result[0]});
        }
        catch(ex){

          console.log('Error>> ex>> Fuente.get>> ' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  this.mantenimiento = function(fuente, res) {

    var param = '<params accion= "' + fuente.accion 
                      + '" idFuente= "' + fuente.idFuente || 0
                      + '" fuente= "' + fuente.idHabitacion 
                      +'" />';
                      
    connection.acquire(function(err, con) {
      con.query('call cat_fuente(\''+param+'\')', function(err, result) {
        try{

          con.release();
          if (err) {
            console.log('Error>> Fuente.mantenimiento>>' + err);
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
          console.log('Error>> ex>> Fuente.mantenimiento>>' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

}

module.exports = new Fuente();
