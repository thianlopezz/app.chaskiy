var connection = require('../server/connection');
var moment = require('moment');
const axios = require('axios');

const API = process.env.CORREO_GENERICO || 'http://localhost:3000';

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
          else
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

            console.log('Error>> Reserva.getById>> ' + err);
            res.send({success: false, mensaje: '' + err});
          }

          result[0][0].pass = result[1][0];
          result[0][0].valueAd = result[2];
          result[0][0].habitaciones = result[3];

          res.send({success: true, data: result[0]});
        }
        catch(ex){

          console.log('Error>> ex>> Reserva.getById>> ' + ex);
          res.send({success: false, mensaje: ex});
        }

      });
    });
  };

  this.getByIdEx = function (id, res) {
    connection.acquire(function (err, con) {
      con.query('call res_exte(\'' + id + '\')', function (err, result) {
        try {

          con.release();
          if (err) {

            console.log('Error>> Reserva.getByIdEx>> ' + err);
            res.send({ success: false, mensaje: '' + err });
          }

          if (result[0][0] !== undefined) {

            result[0][0].pass = result[1][0];
            result[0][0].valueAd = result[2];
            result[0][0].habitaciones = result[3];
            result[0][0].hospedaje = result[4][0];
            result[0][0].hospedaje.redes = result[5];

            res.send({ success: true, data: result[0] });
            return;

          }
          
          res.send({ success: false, mensaje: 'No existe la reserva con los datos enviados'});
        }
        catch (ex) {

          console.log('Error>> ex>> Reserva.getByIdEx>> ' + ex);
          res.send({ success: false, mensaje: ex });
        }

      });
    });
  };

  this.confirma = function (id, res) {
    connection.acquire(function (err, con) {
      con.query('call res_confirma(\'' + id + '\')', function (err, result) {
        try {

          console.log('res_confirma >>' + id);

          con.release();
          if (err) {

            console.log('Error>> Reserva.confirma>> ' + err);
            res.send({ success: false, mensaje: '' + err });
          } else
            if (result[0][0].err == undefined) {

              enviaCorreo(result[0][0], 'I', 'Re', function (result) {

                if (!result.success)
                  console.log("Error>> Reserva.confirma>> Error en el registro de envio de correo");

                res.send({ success: true, mensaje: 'Reserva confirmada con éxito' });
              });
            }
            else
              res.send({ success: false, mensaje: result[0][0].mensaje });
          
        }
        catch (ex) {

          console.log('Error>> ex>> Reserva.confirma>> ' + ex);
          res.send({ success: false, mensaje: ex });
        }

      });
    });
  };

  this.mantenimiento = function(reserva, res) {

    reserva.idReserva = reserva.idReserva || 0;
    reserva.notas = reserva.notas || '';
    reserva.pass.valuePa = reserva.pass.valuePa || 0;
    reserva.valueAd = reserva.valueAd || [];
    reserva.estado = reserva.estado || '';
    reserva.estadoDetalle = reserva.estadoDetalle || '';
    reserva.feDesde = moment(reserva.feDesde).format('DD[/]MM[/]YYYY') || '';
    reserva.feHasta = moment(reserva.feHasta).format('DD[/]MM[/]YYYY') || '';

    var param = '<params accion= "'+ reserva.accion +'" idHospedaje= "'+ reserva.idHospedaje
                    +'" idAerolinea= "'+ reserva.idAerolinea +'" idReserva= "'+ reserva.idReserva
                    +'" noPersonas= "'+ reserva.noPersonas +'" notas= "'+ reserva.notas
                    +'" idHabitacion= "'+ setHabitaciones(reserva.habitaciones) +'" idAdicional= "'+ setAdicionales(reserva.valueAd)
                    +'" idPais= "'+ reserva.pass.valuePa
                    +'" pasajero= "'+ reserva.pass.pasajero +'" noContacto= "'+ reserva.pass.noContacto
                    +'" correo= "'+ reserva.pass.correo +'" habLength= "'+ reserva.habitaciones.length
                    +'" adLength= "'+ reserva.valueAd.length
                    +'" total= "'+ reserva.total
                    +'" idUsuario= "'+ reserva.idUsuario
                    +'" estado= "'+ reserva.estado
                    +'" feDesde= "'+ reserva.feDesde
                    +'" feHasta= "'+ reserva.feHasta
                    +'" detalleEstado= "'+ reserva.estadoDetalle
                    +'" />';

    console.log('call res_reserva>> ' + param);

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
          console.log('Error>> ex>> Reserva.mantenimiento>>' + ex);
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
      plantilla = './plantillas/Reservas/confirmacion_reserva';

      if(estado == 'Pr'){

        asunto = 'Proforma de reserva ' + datos.idReserva;
        plantilla = './plantillas/Reservas/proforma_reserva';
      }
    }
    else
      if(accion == 'D'){

        asunto = 'Cancelación de reserva ' + datos.idReserva;
        plantilla = './plantillas/Reservas/cancelacion_reserva';
      }
      else
        if(accion == 'Es')
            return callback({success: true, mensaje: 'Reserva cancelada con éxito'});

        var correo = {
          idHospedaje: datos.idHospedaje,
          asunto: asunto,
          destinatario: destinatario,
          claves: claves,
          plantilla: plantilla
        };

        axios.post(`${API}/api/send`, correo)
        .then(result => {
          callback(result.data);
        })
        .catch(error => {

          console.log("Err>>" + error);
          callback(error);
        });


  }

}

module.exports = new Reserva();
