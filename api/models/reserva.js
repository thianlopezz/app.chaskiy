var connection = require('../connection');
var moment = require('moment');
const axios = require('axios');
var md5 = require('md5');

const API = process.env.CORREO_GENERICO || 'https://correo-generico.herokuapp.com';

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

  this.getByIdEx = function (id, token, res) {
    connection.acquire(function (err, con) {
      con.query('call res_exte(\'' + id + '\', \'' + token + '\')', function (err, result) {
        try {

          con.release();
          if (err) {

            console.log('Error>> Reserva.getByIdEx>> ' + err);
            res.send({ success: false, mensaje: '' + err });
          }

          if (result[0][0].err === undefined) {

            result[0][0].pass = result[1][0];
            result[0][0].valueAd = result[2];
            result[0][0].habitaciones = result[3];
            result[0][0].hospedaje = result[4][0];
            result[0][0].hospedaje.redes = result[5];

            res.send({ success: true, data: result[0] });
            return;

          } else
            res.send({ success: false, mensaje: result[0][0].err});
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

    let param = setXml(reserva);

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
    
    var retorno = "";    

    for(var i=0; i<habitaciones.length; i++){

      retorno = retorno + habitaciones[i].idHabitacion + ';'
      + (habitaciones[i].tarifa || 0) + ';'
      + (habitaciones[i].idtarifa || 0) + ';'
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

  function setXml(data) {

    console.log('params>>');
    console.log(data);

    data.idReserva = data.idReserva || 0;
    data.notas = data.notas || '';
    data.pass.valuePa = data.pass.valuePa || 0;
    data.valueAd = data.valueAd || [];
    data.estado = data.estado || '';
    data.estadoDetalle = data.estadoDetalle || '';
    data.feDesde = moment(data.feDesde).format('DD[/]MM[/]YYYY') || '';
    data.feHasta = moment(data.feHasta).format('DD[/]MM[/]YYYY') || '';

    let tokenReserva = md5(moment().format('DDMMYYYYhhmmss'));

    let param = '<params accion= "' + data.accion + '" idHospedaje= "' + data.idHospedaje
      + '" idAerolinea= "' + data.idAerolinea + '" idReserva= "' + data.idReserva
      + '" noPersonas= "' + data.noPersonas + '" notas= "' + data.notas
      + '" idHabitacion= "' + setHabitaciones(data.habitaciones) + '" idAdicional= "' + setAdicionales(data.valueAd)
      + '" idPais= "' + data.pass.valuePa
      + '" pasajero= "' + data.pass.pasajero + '" noContacto= "' + (data.pass.noContacto || '')
      + '" correo= "' + data.pass.correo + '" habLength= "' + data.habitaciones.length
      + '" adLength= "' + data.valueAd.length
      + '" total= "' + data.total
      + '" idUsuario= "' + data.idUsuario
      + '" estado= "' + data.estado
      + '" feDesde= "' + data.feDesde
      + '" feHasta= "' + data.feHasta
      + '" detalleEstado= "' + data.estadoDetalle
      + '" tokenReserva= "' + tokenReserva
      + '" idFuente= "' + data.idFuente
      + '" />';

    console.log(param);
    return param;
  }

}

module.exports = new Reserva();
