var connection = require('../connection');

function Hospedaje() {

  this.get = function (params, res) {
    connection.acquire(function (err, con) {
      con.query('call ho_hospedaje(\'' + params + '\')', function (err, result) {
        try {

          con.release();
          console.log(params);

          if (err) {

            console.log('Error>> Hospedaje.get>>' + err);
            res.send({ success: false, mensaje: '' + err });
          }
          else
            res.send({ success: true, data: result });
        }
        catch (ex) {

          console.log('Error>> ex>> Hospedaje.get>> ' + ex);
          res.send({ success: false, mensaje: ex });
        }
      });
    });
  };

  this.mantenimiento = function (_registro, res) {

    var param = setxml(_registro);

    console.log(param);
    connection.acquire(function (err, con) {
      con.query('call ho_hospedaje(\'' + param + '\')', function (err, result) {
        try {

          con.release();
          if (err) {
            console.log('Error>> Habitacion.mantenimiento>>' + err);
            res.send({ success: false, mensaje: err });
          }
          else {
            if (result[0][0].err == undefined)
              res.send({ success: true, mensaje: result[0][0].mensaje });
            else
              res.send({ success: false, mensaje: result[0][0].mensaje });
          }
        }
        catch (ex) {
          console.log('Error>> ex>> Habitacion.mantenimiento>>' + ex);
          res.send({ success: false, mensaje: ex });
        }
      });
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

    console.log('params>>>');
    console.log(data);

    var params = '<params accion= "' + data.accion
      + '" idPais= "' + data.valuePa
      + '" idHospedaje= "' + data.idHospedaje
      + '" hospedaje= "' + data.hospedaje
      + '" ciudad= "' + data.ciudad
      + '" direccion= "' + data.direccion
      + '" correo= "' + data.correo
      + '" nombre= "' + data.nombre
      + '" sociales= "' + setSociales(data.redes)
      + '" solength= "' + data.redes.length
      + '" />';

    console.log(params);

    return params;
  }

}

module.exports = new Hospedaje();
