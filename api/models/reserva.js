const DataAcess = require('./DataAccess');
var moment = require('moment');
const axios = require('axios');
var md5 = require('md5');

const API = process.env.CORREO_GENERICO || 'https://correo-generico.herokuapp.com';

function Reserva() {

  this.get = function (params, res) {
    DataAcess.exec_arraysp('res_reserva', [params], function (error, result) {
      if (error) {

        console.log('Error>> Reserva.get>> ' + error);
        res.send({ success: false, mensaje: '' + error });
      } else {
        res.send({ success: true, data: result[0] });
      }
    })
  };

  this.getById = function (params, res) {
    DataAcess.exec_arraysp('res_reserva', [params], function (error, result) {

      if (error) {

        console.log('Error>> Reserva.getById>> ' + error);
        res.send({ success: false, mensaje: '' + error });
      } else {

        result[0][0].pass = result[1][0];
        result[0][0].valueAd = result[2];
        result[0][0].habitaciones = result[3];

        res.send({ success: true, data: result[0] });
      }
    })
  };

  this.getByIdEx = function (id, token, res) {
    DataAcess.exec_arraysp('res_exte', [id, token], function (error, result) {

      if (error) {

        console.log('Error>> Reserva.getByIdEx>> ' + error);
        res.send({ success: false, mensaje: '' + error });
      }

      if (result[0][0].err === undefined) {

        result[0][0].pass = result[1][0];
        result[0][0].valueAd = result[2];
        result[0][0].habitaciones = result[3];
        result[0][0].hospedaje = result[4][0];
        result[0][0].hospedaje.redes = result[5];

        res.send({ success: true, data: result[0] });
      } else {
        res.send({ success: false, mensaje: result[0][0].err });
      }
    })
  };

  this.confirma = function (id, res) {
    DataAcess.exec_arraysp('res_confirma', [id], function (error, result) {

      if (error) {

        console.log('Error>> Reserva.confirma>> ' + error);
        res.send({ success: false, mensaje: '' + error });
      } else if (result[0][0].err == undefined) {

        enviaCorreo(result[0][0], 'I', 'Re', function (result) {

          if (!result.success)
            console.log("Error>> Reserva.confirma>> Error en el registro de envio de correo");

          res.send({ success: true, mensaje: 'Reserva confirmada con éxito' });
        });
      } else {

        res.send({ success: false, mensaje: result[0][0].mensaje });
      }
    })
  };

  this.mantenimiento = function (reserva, res) {

    let params = setXml(reserva);

    DataAcess.exec_arraysp('res_reserva', [params], function (error, result) {
      if (error) {

        console.log('Error>> Reserva.mantenimiento>>' + error);
        res.send({ success: false, mensaje: '' + error });
      } else if (result[0][0].err == undefined) {

        enviaCorreo(result[0][0], reserva.accion, reserva.estado, function (result) {

          if (!result.success) {
            console.log("Error>> Reserva.mantenimiento>> Error en el registro de envio de correo");
          }

          res.send({ success: true, mensaje: 'Mantenimiento exitoso' });
        });
      } else {
        res.send({ success: false, mensaje: result[0][0].mensaje });
      }
    })
  };

  function setHabitaciones(habitaciones) {

    var retorno = "";

    for (var i = 0; i < habitaciones.length; i++) {

      retorno = retorno + habitaciones[i].idhabitacion + ';'
        + (habitaciones[i].tarifa || 0) + ';'
        + (habitaciones[i].idtarifa || 0) + ';'
        + moment(habitaciones[i].fedesde).format('DD[/]MM[/]YYYY') + ';'
        + moment(habitaciones[i].fehasta).format('DD[/]MM[/]YYYY') + '|';
    }

    return retorno;
  }

  function setAdicionales(adicionales) {

    var retorno = "";

    for (var i = 0; i < adicionales.length; i++) {
      retorno = retorno + adicionales[i].idadicional + ';'
        + adicionales[i].tarifa + ';'
        + adicionales[i].cantidad + '|';
    }

    return retorno;
  }

  function enviaCorreo(datos, accion, estado, callback) {

    var claves = "";
    var plantilla = "";
    var asunto = "";
    var destinatario = datos.destinatario;

    for (var name in datos) {

      var value = datos[name];
      claves = claves + ';' + name + ':' + value;
    }


    if (accion == 'I' || accion == 'U') {

      asunto = 'Confirmación de reserva ' + datos.idreserva;
      plantilla = './plantillas/Reservas/confirmacion_reserva';

      if (estado == 'Pr') {

        asunto = 'Proforma de reserva ' + datos.idreserva;
        plantilla = './plantillas/Reservas/proforma_reserva';
      }
    }
    else
      if (accion == 'D') {

        asunto = 'Cancelación de reserva ' + datos.idreserva;
        plantilla = './plantillas/Reservas/cancelacion_reserva';
      }
      else
        if (accion == 'Es')
          return callback({ success: true, mensaje: 'Reserva cancelada con éxito' });

    var correo = {
      idhospedaje: datos.idhospedaje,
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

    data.idreserva = data.idreserva || 0;
    data.notas = data.notas || '';
    data.pass.valuePa = data.pass.valuePa || 0;
    data.valueAd = data.valueAd || [];
    data.estado = data.estado || '';
    data.estadoDetalle = data.estadoDetalle || '';
    data.fedesde = moment(data.fedesde).format('DD[/]MM[/]YYYY') || '';
    data.fehasta = moment(data.fehasta).format('DD[/]MM[/]YYYY') || '';

    let token = md5(moment().format('DDMMYYYYhhmmss'));

    return '<params accion= "' + data.accion
    + '" idhospedaje= "' + data.idhospedaje
      + '" idaerolinea= "' + data.idaerolinea
      + '" idreserva= "' + data.idreserva
      + '" nopersonas= "' + data.nopersonas
      + '" notas= "' + data.notas
      + '" idhabitacion= "' + setHabitaciones(data.habitaciones)
      + '" idadicional= "' + setAdicionales(data.valueAd)
      + '" idpais= "' + data.pass.valuePa
      + '" pasajero= "' + data.pass.pasajero
      + '" nocontacto= "' + (data.pass.nocontacto || '')
      + '" correo= "' + data.pass.correo
      + '" hablength= "' + data.habitaciones.length
      + '" adlength= "' + data.valueAd.length
      + '" total= "' + data.total
      + '" idusuario= "' + data.idusuario
      + '" estado= "' + data.estado
      + '" fedesde= "' + data.fedesde
      + '" fehasta= "' + data.fehasta
      + '" detalleEstado= "' + data.detalleEstado
      + '" token= "' + token
      + '" idfuente= "' + data.idfuente
      + '" />';
  }

}

module.exports = new Reserva();
