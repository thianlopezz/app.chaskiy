const DataAccess = require('./DataAccess');

function Pasajero() {

  this.get = function (params, res) {

    DataAccess.exec_arraysp('pa_pasajero', [params], function (error, result) {
      if (error) {

        console.log('Error>> Pasajero.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      }
      else {
        res.send({ success: true, data: result[0] });
      }
    })
  };

  this.mantenimiento = function (pasajero, res) {

    DataAccess.exec_objectsp('pa_pasajero', pasajero, function (error, result) {
      if (error) {
        console.log('Error>> Pasajero.mantenimiento>>' + error);
        res.send({ success: false, mensaje: '' + error });
      } else {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      }
    });
  };

}

module.exports = new Pasajero();
