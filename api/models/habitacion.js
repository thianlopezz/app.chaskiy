// var connection = require('../connection');
const DataAccess = require('./DataAccess');

var moment = require('moment');

function Habitacion() {

  this.get = function (params, res) {

    const dataAccess = new DataAccess();

    dataAccess.execJsonToSp('hab_habitacion', params)
    .then(result=>{
      res.send({ success: true, data: result[0] });
    })
    .catch(error=>{
      console.log('Error>> Habitacion.get>>' + error);
      res.send({ success: false, mensaje: '' + error });
    })
  };

  this.getDisponibles = function (feDesde, feHasta, idHospedaje, res) {

    const dataAccess = new DataAccess();

    const formato = 'DD[/]MM[/]YYYY';

    if (!moment(feDesde, formato).isValid() ||
      !moment(feHasta, formato).isValid()) {

      return res.status(404).send({
        success: false,
        mensaje: 'Las fechas no son válidas.'
      });
    }

    dataAccess.execArrayToSp('hab_disponibles', [feDesde, feHasta, idHospedaje], function (error, result) {

      if (error) {
        console.log('Error>> Habitacion.getDisponibles>>' + error);
        res.send({ success: false, mensaje: '' + error });
      } else {
        res.send({ success: true, data: result[0] });
      }
    })
  };

  this.mantenimiento = function (habitacion, res) {

    const dataAccess = new DataAccess();

    dataAccess.execJsonToSp('hab_habitacion', habitacion)
    .then(result=>{
      if (result[0][0].err == undefined){
        res.send({ success: true, mensaje: result[0][0].mensaje });
      } else {
        res.send({ success: false, mensaje: result[0][0].mensaje });
      }        
    })
    .catch(error=>{
      console.log('Error>> Habitacion.mantenimiento>>' + error);
      res.send({ success: false, mensaje: error });
    })
  };

}

module.exports = new Habitacion();
