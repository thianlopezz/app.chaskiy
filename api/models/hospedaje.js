const DataAccess = require('./DataAccess');

function Hospedaje() {

  this.get = function (params, res) {
    DataAccess.exec_arraysp('ho_hospedaje', [params], function(error, result){
      if (error) {

        console.log('Error>> Hospedaje.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      }
      else {
        res.send({ success: true, data: result });
      }        
    })
  };

  this.mantenimiento = function (hospedaje, res) {

    var params = setxml(hospedaje);

    DataAccess.exec_arraysp('ho_hospedaje', [params], function(error, result){

      if (error) {
        console.log('Error>> Hospedaje.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      }
      else {
        if (result[0][0].err == undefined){
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }          
      }
    });
  };

  function setSociales(redes) {

    var retorno = "";

    for (var i = 0; i < redes.length; i++) {
      retorno = retorno + redes[i].idSocial + ';'
        + (redes[i].valor || '') + '|';
    }

    return retorno;
  }

  function setxml(data) {

    var params = '<params accion= "' + data.accion
      + '" idPais= "' + data.valuePa
      + '" idHospedaje= "' + data.idHospedaje
      + '" hospedaje= "' + data.hospedaje
      + '" ciudad= "' + data.ciudad
      + '" direccion= "' + data.direccion
      + '" correo= "' + data.correo
      + '" nombre= "' + data.nombre
      + '" sociales= "' + setSociales(data.redes)
      + '" socialLength= "' + data.redes.length
      + '" />';
    return params;
  }

}

module.exports = new Hospedaje();
