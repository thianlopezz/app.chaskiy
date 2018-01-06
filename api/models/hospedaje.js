var connection = require('../connection');

function Hospedaje() {

  this.get = function(params, res) {
    connection.acquire(function(err, con) {
      con.query('call ho_hospedaje(\''+params+'\')', function(err, result) {
        try{

          con.release();
          console.log(params);

          if(err){

            console.log('Error>> Hospedaje.get>>' + err);
            res.send({success: false, mensaje: '' + err});
          }
          else
            res.send({success: true, data: result});
        }
        catch(ex){

          console.log('Error>> ex>> Hospedaje.get>> ' + ex);
          res.send({success: false, mensaje: ex});
        }
      });
    });
  };

  this.mantenimiento = function(_registro, res) {

    var param = '<params accion= "'+ _registro.accion
                    +'" idPais= "'+ _registro.valuePa
                    +'" idHospedaje= "'+ _registro.idHospedaje
                    +'" hospedaje= "'+ _registro.hospedaje
                    +'" ciudad= "'+ _registro.ciudad
                    +'" direccion= "'+ _registro.direccion
                    +'" correo= "'+ _registro.correo
                    +'" nombre= "'+ _registro.nombre
                    +'" sociales= "'+ setSociales(_registro.redes)
                    +'" solength= "'+ _registro.redes.length
                    +'" />';
    console.log(param);
    connection.acquire(function(err, con) {
      con.query('call ho_hospedaje(\''+param+'\')', function(err, result) {
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

  function setSociales(redes){

    var retorno ="";

    for(var i=0; i<redes.length; i++){
      retorno = retorno + redes[i].idSocial + ';'
                          + (redes[i].valor || '') + '|';
    }

    return retorno;
  }

}

module.exports = new Hospedaje();
