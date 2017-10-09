var connection = require('../server/connection');

function Adicional() {

  this.get = function(params, res) {
    connection.acquire(function(err, con) {
      con.query('call ad_adicional(\''+params+'\')', function(err, result) {
        try{

        con.release();

        if(err){

          console.log('Error>> Adicional.get>>' + err);
          res.send({success: false, mensaje: '' + err});
        }
        else
          res.send({success: true, data: result[0]});
        }
        catch(ex){

          console.log('Error>> ex>> Adicional.get>> ' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  this.mantenimiento = function(adicional, res) {
    //habitacion.idHospedaje = 1;
    var param = '<params accion= "'+ adicional.accion +'" idHospedaje= "'+ adicional.idHospedaje
                    +'" idAdicional = "'+ adicional.idAdicional +'" descripcion= "'+ adicional.adicional
                    +'" tarifa= "'+ adicional.tarifa
                    +'" />';
    // console.log(param);
    connection.acquire(function(err, con) {
      con.query('call ad_adicional(\''+param+'\')', function(err, result) {
        try{

          con.release();
          if (err) {
            console.log('Error>> Adicional.mantenimiento>>' + err);
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
          console.log('Error>> ex>> Adicional.mantenimiento>>' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

}

module.exports = new Adicional();
