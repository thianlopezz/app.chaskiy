var connection = require('../server/connection');
var conne_generico = require('../server/conne_generico');
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
    reserva.estado = reserva.estado || '';

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
                    +'" estado= "'+ reserva.estado
                    +'" />';

    connection.acquire(function(err, con) {
      con.query('call res_reserva(\''+param+'\')', function(err, result) {
        try{

          con.release();

          if (err) {

            console.log('Error>> Reserva.mantenimiento>>' + err);
            res.send({success: false, mensaje: '' + err});
          }
          else {
            if(result[0][0].err == undefined){

              enviaCorreo(result[0][0], reserva.accion, reserva.estado, function(result){

                if(!result.success)
                  console.log("Error>> Reserva.mantenimiento>> Error en el registro de envio de correo");

                res.send({success: true, mensaje: 'Mantenimiento exitoso'});
              });
            }
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

  function enviaCorreo(datos, accion, estado, callback){

    var claves ="";
    var plantilla ="";
    var asunto ="";
    var destinatario = datos.destinatario;

    for(var name in datos) {

      var value = datos[name];
      claves = claves + ';' + name + ':' + value;
    }


    if(accion == 'I' || accion == 'U'){

      asunto = 'Confirmación de reserva ' + datos.idReserva;
      plantilla = './plantillas/confirmacion_reserva';

      if(estado == 'Pr'){

        asunto = 'Proforma de reserva ' + datos.idReserva;
        plantilla = './plantillas/proforma_reserva';
      }
    }
    else
      if(accion == 'D'){

        asunto = 'Cancelación de reserva ' + datos.idReserva;
        plantilla = './plantillas/cancelacion_reserva';
      }
      else
        if(accion == 'Es')
            return callback({success: true, mensaje: 'Reserva cancelada con éxito'});

    var param = '<params accion= "I" idHospedaje= "'+ datos.idHospedaje
                    +'" asunto= "'+ asunto
                    +'" destinatario= "'+ destinatario
                    +'" claves= "'+ claves
                    +'" plantilla= "'+ plantilla
                    +'" />';

    conne_generico.acquire(function(err, con) {
      con.query('call co_correo(\''+param+'\')', function(err, result) {
      try{

      con.release();

      if (err) {

      console.log('Error>> Reserva.enviaCorreo>>' + err);
      return callback({success: false, mensaje: '' + err});
      }
      else {

        if(result[0][0].err == undefined){

        return callback({success: true, mensaje: result[0][0].mensaje});
        }
        else
          return callback({success: false, mensaje: result[0][0].mensaje});
      }
      }
      catch(ex){

      console.log('Error>> ex>> Reserva.enviaCorreo>>' + ex);
      return callback({success: false, mensaje: ex});
      }
      });
    });


  }

}

module.exports = new Reserva();
