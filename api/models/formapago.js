var connection = require('../connection');

function FormaPago() {

  this.get = function(params, res) {
    connection.acquire(function(err, con) {
      con.query('call pg_formapago(\''+params+'\')', function(err, result) {
        try{

          con.release();

          if(err){

            console.log('Error>> FormaPago.get>>' + err);
            res.send({success: false, mensaje: '' + err});
          }
          else
            res.send({success: true, data: result[0]});
        }
        catch(ex){

          console.log('Error>> ex>> FormaPago.get>> ' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  this.mantenimiento = function(formaPago, res) {
    //habitacion.idHospedaje = 1;
    var param = '<params accion= "'+ formaPago.accion +'" formaPago= "'+ formaPago.formaPago
                  +'" />';
    //console.log(param);
    connection.acquire(function(err, con) {
      con.query('call pg_formapago(\''+param+'\')', function(err, result) {
        try{

          con.release();
          if (err) {
            console.log('Error>> FormaPago.mantenimiento>>' + err);
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
          console.log('Error>> ex>> FormaPago.mantenimiento>>' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

}

module.exports = new FormaPago();
