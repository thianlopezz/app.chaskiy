// var connection = require('../connection');
const DataAcess = require('./DataAccess');

var moment = require('moment');

function Habitacion() {

  this.get = function (params, res) {
    DataAcess.exec_arraysp('hab_habitacion', [params], function (error, result) {

      if (error) {

        console.log('Error>> Habitacion.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      }
      else {
        res.send({ success: true, data: result[0] });
      }
    })
  };

  this.getDisponibles = function (feDesde, feHasta, idHospedaje, res) {

    const formato = 'DD[/]MM[/]YYYY';

    if (!moment(feDesde, formato).isValid() ||
      !moment(feHasta, formato).isValid()) {

      return res.status(404).send({
        success: false,
        mensaje: 'Las fechas no son válidas.'
      });
    }

    DataAcess.exec_arraysp('hab_disponibles', [feDesde, feHasta, idHospedaje], function (error, result) {

      if (error) {

        console.log('Error>> Habitacion.getDisponibles>>' + error);
        res.send({ success: false, mensaje: '' + error });
      }
      else {

        res.send({ success: true, data: result[0] });
      }
    })
  };

  this.mantenimiento = function (habitacion, res) {

    DataAcess.exec_objectsp('hab_habitacion', habitacion, function (error, result) {

      if (error) {
        console.log('Error>> Habitacion.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      }
      else {
        if (result[0][0].err == undefined)
          res.send({ success: true, mensaje: result[0][0].mensaje });
        else
          res.send({ success: false, mensaje: result[0][0].mensaje });
      }
    });
  };

}

module.exports = new Habitacion();
