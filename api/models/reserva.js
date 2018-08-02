const DataAcess = require('./DataAccess');
const moment = require('moment');
const md5 = require('md5');

const CorreoGenerico = require('./CorreoGenerico');

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

        result[0][0].pasajero = result[1][0];
        result[0][0].adicionales = result[2];
        result[0][0].habitaciones = result[3];

        res.send({ success: true, data: result[0] });
      }
    })
  };

  this.mantenimiento = function (reserva, res) {

    console.log(reserva);

    let params = setXml(reserva);

    DataAcess.exec_arraysp('res_reserva', [params], function (error, result) {
      if (error) {

        console.log('Error>> Reserva.mantenimiento>>' + error);
        res.send({ success: false, mensaje: '' + error });
      } else if (result[0][0].err == undefined) {

        enviaCorreo(result[0][0], reserva.accion, reserva.estado)
          .then(() => res.send({ success: true, mensaje: 'Mantenimiento exitoso' }))
          .catch(() => res.send({ success: true, mensaje: 'Mantenimiento exitoso' }));

      } else {
        res.send({ success: false, mensaje: result[0][0].mensaje });
      }
    })
  };

  this.cambiaEstado = function (reserva, res) {

    DataAcess.exec_objectsp('res_cambiaEstado', reserva, function (error, result) {
      if (error) {

        console.log('Error>> Reserva.cambiaEstado>>' + error);
        res.send({ success: false, mensaje: '' + error });
      } else if (result[0][0].err == undefined) {

        res.send({ success: true, mensaje: 'Mantenimiento exitoso' });
      } else {
        res.send({ success: false, mensaje: result[0][0].mensaje });
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

        result[0][0].pasajero = result[1][0];
        result[0][0].adicionales = result[2];
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

        enviaCorreo(result[0][0], 'I', 'Re')
          .then(() => res.send({ success: true, mensaje: 'Mantenimiento exitoso' }))
          .catch(() => res.send({ success: true, mensaje: 'Mantenimiento exitoso' }));
      } else {

        res.send({ success: false, mensaje: result[0][0].mensaje });
      }
    })
  };

  function setHabitaciones(habitaciones) {

    var retorno = "";

    for (var i = 0; i < habitaciones.length; i++) {

      retorno = retorno + habitaciones[i].idHabitacion + ';'
        + (habitaciones[i].tarifa || 0) + ';'
        + (habitaciones[i].idTarifa || 0) + ';'
        + moment(habitaciones[i].feDesde).format('DD[/]MM[/]YYYY') + ';'
        + moment(habitaciones[i].feHasta).format('DD[/]MM[/]YYYY') + '|';
    }

    return retorno;
  }

  function setAdicionales(adicionales) {

    var retorno = "";

    for (var i = 0; i < adicionales.length; i++) {
      retorno = retorno + adicionales[i].idAdicional + ';'
        + adicionales[i].tarifa + ';'
        + adicionales[i].cantidad + '|';
    }

    return retorno;
  }

  function enviaCorreo(datos, accion, estado) {

    return new Promise((resolve, reject) => {

      let claves = '';
      let plantilla = '';
      let asunto = '';
      let destinatario = datos.destinatario;

      for (let name in datos) {

        let value = datos[name];
        claves = claves + ';' + name + ':' + value;
      }

      // SI ES UNA CREACION DE RESERVA O UNA MODIFICACION
      if (accion === 'I' || accion === 'U') {

        asunto = 'Confirmación de reserva ' + datos.idReserva;
        plantilla = './plantillas/Reservas/confirmacion_reserva';

        // SI ES UNA CREACION Y PROFORMA
        if (estado == 'Pr') {

          asunto = 'Proforma de reserva ' + datos.idReserva;
          plantilla = './plantillas/Reservas/proforma_reserva';
        }
        // SI ES UNA CANCELACION DE RESERVA
      } else if (accion == 'D') {

        asunto = 'Cancelación de reserva ' + datos.idReserva;
        plantilla = './plantillas/Reservas/cancelacion_reserva';
      } else if (accion == 'Es') {
        return resolve({ success: true, mensaje: 'Reserva cancelada con éxito' });
      }

      CorreoGenerico.enviar(asunto, destinatario, claves, plantilla, datos.idHospedaje)
        .then(resolve({ success: true }))
        .catch((error) => {
          console.log('No se pudo enviar el correo>>' + error.message);
          reject(error);
        });
    })
  }

  function setXml(data) {

    data.idReserva = data.idReserva || 0;
    data.notas = data.notas || '';
    data.pasajero.idPais = data.pasajero.idPais || 0;
    data.adicionales = data.adicionales || [];
    data.estado = data.estado || '';
    data.estadoDetalle = data.estadoDetalle || '';
    data.feDesde = moment(data.feDesde).format('DD[/]MM[/]YYYY') || '';
    data.feHasta = moment(data.feHasta).format('DD[/]MM[/]YYYY') || '';

    let token = md5(moment().format('DDMMYYYYhhmmss'));

    return '<params accion= "' + data.accion
      + '" idHospedaje= "' + data.idHospedaje
      + '" idAerolinea= "' + data.idAerolinea
      + '" idReserva= "' + data.idReserva
      + '" adultos= "' + data.adultos
      + '" ninos= "' + data.ninos
      + '" notas= "' + data.notas
      + '" idHabitacion= "' + setHabitaciones(data.habitaciones)
      + '" idAdicional= "' + setAdicionales(data.adicionales)
      + '" idPais= "' + data.pasajero.idPais
      + '" pasajero= "' + data.pasajero.pasajero
      + '" noContacto= "' + (data.pasajero.noContacto || '')
      + '" correo= "' + data.pasajero.correo
      + '" habitacionLength= "' + data.habitaciones.length
      + '" adicionalLength= "' + data.adicionales.length
      + '" total= "' + data.total
      + '" idUsuario= "' + data.idUsuario
      + '" estado= "' + data.estado
      + '" feDesde= "' + data.feDesde
      + '" feHasta= "' + data.feHasta
      + '" detalleEstado= "' + data.detalleEstado
      + '" token= "' + token
      + '" idFuente= "' + data.idFuente
      + '" />';
  }

}

module.exports = new Reserva();
