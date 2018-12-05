const DataAcess = require('./DataAccess');
const moment = require('moment');
const md5 = require('md5');

const CorreoGenerico = require('./CorreoGenerico');

function Reserva() {

  this.get = function (params, res) {

    const dataAcess = new DataAcess();

    dataAcess.execJsonToSp('res_reserva', params)
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Reserva.get>> ' + error);
        res.send({ success: false, mensaje: '' + error });
      })
  };

  this.getById = function (params, res) {

    const dataAcess = new DataAcess();

    dataAcess.execJsonToSp('res_reserva', params)
      .then(result => {

        result[0][0].pasajero = result[1][0];
        result[0][0].adicionales = result[2];
        result[0][0].habitaciones = result[3];

        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Reserva.getById>> ' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  };

  this.mantenimiento = function (reserva, res) {

    const dataAcess = new DataAcess();

    dataAcess.execArrayToSp('res_reserva', reserva)
      .then(result => {
        if (result[0][0].err === undefined) {

          enviaCorreo(result[0][0], reserva.accion, reserva.estado, reserva.desdePagina)
            .then(() => res.send({ success: true, mensaje: 'Mantenimiento exitoso' }))
            .catch(() => res.send({ success: true, mensaje: 'Mantenimiento exitoso' }));

        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Reserva.mantenimiento>>' + error);
        res.send({ success: false, mensaje: '' + error });
      })
  };

  this.cambiaEstado = function (reserva, res) {

    const dataAcess = new DataAcess();

    dataAcess.execJsonToSp('res_cambiaEstado', reserva)
      .then(result => {
        if (result[0][0].err === undefined) {

          res.send({ success: true, mensaje: 'Mantenimiento exitoso' });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Reserva.cambiaEstado>>' + error);
        res.send({ success: false, mensaje: '' + error });
      })
  };

  this.getByIdEx = function (id, token, res) {

    const dataAcess = new DataAcess();

    dataAcess.execArrayToSp('res_exte', [id, token])
      .then(result => {

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
      .catch(error => {
        console.log('Error>> Reserva.getByIdEx>> ' + error);
        res.send({ success: false, mensaje: '' + error });
      })
  };

  this.confirma = function (id, res) {

    const dataAcess = new DataAcess();

    dataAcess.execArrayToSp('res_confirma', [id])
      .then(result => {
        if (result[0][0].err === undefined) {

          enviaCorreo(result[0][0], 'I', 'Re')
            .then(() => res.send({ success: true, mensaje: 'Mantenimiento exitoso' }))
            .catch(() => res.send({ success: true, mensaje: 'Mantenimiento exitoso' }));
        } else {

          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Reserva.confirma>> ' + error);
        res.send({ success: false, mensaje: '' + error });
      })
  };

  function enviaCorreo(datos, accion, estado, desdePagina) {

    return new Promise((resolve, reject) => {

      let claves = datos;
      let plantilla = '';
      let asunto = '';
      let destinatario = datos.destinatario;

      // SI ES UNA CREACION DE RESERVA O UNA MODIFICACION
      if (accion === 'I' || accion === 'U') {

        asunto = 'Confirmación de reserva ' + datos.idReserva;
        plantilla = './plantillas/Reservas/confirmacion_reserva';

        // SI ES UNA CREACION Y PROFORMA
        if (estado === 'Pr') {

          if (desdePagina) {

            asunto = 'Reserva';
            plantilla = './plantillas/Reservas/reserva_desde_pagina';
          } else {

            asunto = 'Proforma de reserva ' + datos.idReserva;
            plantilla = './plantillas/Reservas/proforma_reserva';
          }
        }
        // SI ES UNA CANCELACION DE RESERVA
      } else if (accion === 'D') {

        asunto = 'Cancelación de reserva ' + datos.idReserva;
        plantilla = './plantillas/Reservas/cancelacion_reserva';
      } else if (accion === 'Es') {
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

}

module.exports = new Reserva();
