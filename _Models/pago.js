var connection = require('../server/connection');

function Pago() {

  this.get = function(params, res) {
    connection.acquire(function(err, con) {
      con.query('call pg_pago(\''+params+'\')', function(err, result) {
        try{

          con.release();

          if(err){

            console.log('Error>> Pago.get>>' + err);
            res.send({success: false, mensaje: '' + err});
          }
          else
            res.send(result[0]);
        }
        catch(ex){

          console.log('Error>> ex>> Pago.get>> ' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  this.mantenimiento = function(Pago, res) {
    //habitacion.idHospedaje = 1;
    Pago.idPago = Pago.idPago || 0;
    Pago.notas = Pago.notas || '';

    var param = '<params accion= "'+ Pago.accion
                  +'" idPago= "'+ Pago.idPago
                  +'" idFormaPago= "'+ Pago.idFormaPago
                  +'" idReserva= "'+ Pago.idReserva
                  +'" monto= "'+ Pago.monto
                  +'" notas= "'+ Pago.notas
                  +'" idUsuario= "'+ Pago.idUsuario
                  +'" />';
    //console.log(param);
    connection.acquire(function(err, con) {
      con.query('call pg_pago(\''+param+'\')', function(err, result) {
        try{

          con.release();
          if (err) {
            console.log('Error>> Pago.mantenimiento>>' + err);
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
          console.log('Error>> ex>> Pago.mantenimiento>>' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

}

module.exports = new Pago();
