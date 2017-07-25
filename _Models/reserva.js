var connection = require('../server/connection');
var moment = require('moment');

function Reserva() {

  this.get = function(params, res) {
    connection.acquire(function(err, con) {
      con.query('call res_reserva(\''+params+'\')', function(err, result) {
        try{

          con.release();
          if(err){

            console.log('Error>> Pasajero.get>> ' + err);
            res.send({success: false, mensaje: '' + err});
          }

          res.send({success: true, data: result[0]});
        }
        catch(ex){

          console.log('Error>> ex>> Habitacion.get>> ' + ex);
          res.send({success: false, mensaje: ex});
        }

      });
    });
  };

  this.getById = function(params, res) {
    connection.acquire(function(err, con) {
      con.query('call res_reserva(\''+params+'\')', function(err, result) {
        try{

          con.release();
          if(err){

            console.log('Error>> Pasajero.get>> ' + err);
            res.send({success: false, mensaje: '' + err});
          }

          result[0][0].pass = result[1][0];
          result[0][0].valueAd = result[2];
          result[0][0].habitaciones = result[3];

          res.send({success: true, data: result[0]});
        }
        catch(ex){

          console.log('Error>> ex>> Habitacion.get>> ' + ex);
          res.send({success: false, mensaje: ex});
        }

      });
    });
  };

  this.mantenimiento = function(reserva, res) {

    reserva.idReserva = reserva.idReserva || 0;
    reserva.notas = reserva.notas || '';
    reserva.pass.valuePa = reserva.pass.valuePa || 0;
    reserva.valueAd = reserva.valueAd || [];
    reserva.motivo = reserva.motivo || '';

    var param = '<params accion= "'+ reserva.accion +'" idHospedaje= "'+ reserva.idHospedaje
                    +'" idAerolinea= "'+ reserva.idAerolinea +'" idReserva= "'+ reserva.idReserva
                    +'" noPersonas= "'+ reserva.noPersonas +'" notas= "'+ reserva.notas
                    +'" idHabitacion= "'+ setHabitaciones(reserva.habitaciones) +'" idAdicional= "'+ setAdicionales(reserva.valueAd)
                    +'" idPais= "'+ reserva.pass.valuePa +'" identificacion= "'+ reserva.pass.identificacion
                    +'" pasajero= "'+ reserva.pass.pasajero +'" noContacto= "'+ reserva.pass.noContacto
                    +'" correo= "'+ reserva.pass.correo +'" habLength= "'+ reserva.habitaciones.length
                    +'" adLength= "'+ reserva.valueAd.length
                    +'" total= "'+ reserva.total
                    +'" motivo= "'+ reserva.motivo
                    +'" idUsuario= "'+ reserva.idUsuario
                    +'" />';

    connection.acquire(function(err, con) {
      con.query('call res_reserva(\''+param+'\')', function(err, result) {
        try{

          con.release();

          if (err) {

            console.log('Error>> Habitacion.mantenimiento>>' + err);
            res.send({success: false, mensaje: '' + err});
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

  function setHabitaciones(habitaciones){

    var retorno ="";

    for(var i=0; i<habitaciones.length; i++){
      retorno = retorno + habitaciones[i].idHabitacion + ';'
                          + habitaciones[i].tarifa + ';'
                          + moment(habitaciones[i].feDesde).format('DD[/]MM[/]YYYY') + ';'
                          + moment(habitaciones[i].feHasta).format('DD[/]MM[/]YYYY') + '|';
    }

    return retorno;
  }

  function setAdicionales(adicionales){

    var retorno ="";

    for(var i=0; i<adicionales.length; i++){
      retorno = retorno + adicionales[i].idAdicional + ';'
                          + adicionales[i].tarifa + ';'
                          + adicionales[i].cantidad + '|';
    }

    return retorno;
  }

}

module.exports = new Reserva();
