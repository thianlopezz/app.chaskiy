const DataAccess = require('./DataAccess');

function Hospedaje() {

  this.get = function (idHospedaje, res) {

    const dataAccess = new DataAccess();

    dataAccess.execJsonToSp('ho_hospedaje', { accion: 'C', idHospedaje })
      .then(result => {
        res.send({ success: true, data: result });
      })
      .catch(error => {
        console.log('Error>> Hospedaje.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      })
  };

  this.mantenimiento = function (hospedaje, res) {

    const dataAccess = new DataAccess();
    
    dataAccess.execJsonToSp('ho_hospedaje', hospedaje)
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Hospedaje.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      })
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
