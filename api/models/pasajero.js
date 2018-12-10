const DataAccess = require('./DataAccess');

function Pasajero() {

  this.get = function (idHospedaje, res) {

    const dataAccess = new DataAccess();

    dataAccess.execJsonToSp('pa_pasajero', { accion: 'C', idHospedaje })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Pasajero.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      })
  };

  this.getByCorreo = function (correo, idHospedaje, res) {

    const dataAccess = new DataAccess();

    dataAccess.execJsonToSp('pa_pasajero', { accion: 'C1', correo, idHospedaje })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Pasajero.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      })
  };

  this.mantenimiento = function (pasajero, res) {

    const dataAccess = new DataAccess();

    dataAccess.execJsonToSp('pa_pasajero', pasajero)
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Pasajero.mantenimiento>>' + error);
        res.send({ success: false, mensaje: '' + error });
      })
  };

}

module.exports = new Pasajero();
