const axios = require('axios');
import moment from 'moment';

const URL_CORREO_GENERICO = process.env.CORREO_GENERICO || 'https://correo.casadcristhi.com';
// const API =
//   process.env.CORREO_GENERICO || "https://correo-generico.herokuapp.com";

const TOKEN_CORREO = process.env.TOKEN_CORREO || '123';

function CorreoGenerico() {
  this.enviar = function(asunto, destinatario, claves, plantilla, idHospedaje) {
    var correo = {
      idHospedaje,
      asunto: asunto,
      destinatario: destinatario,
      claves: claves,
      plantilla: plantilla,
      token: TOKEN_CORREO
    };

    return new Promise(function(resolve, reject) {
      axios
        .post(`${URL_CORREO_GENERICO}/api/send/v2`, correo)
        .then(({ data }) => {
          if (data.success) {
            console.trace('Correo enviado al api correctamente.');
          } else {
            console.trace('Ocurrio error en api>> ' + data.mensaje);
          }
          resolve(correo);
        })
        .catch(error => {
          console.log('Err>>' + error);
          reject(error);
        });
    });
  };

  this.enviarConfirmacionReservaWebHospedaje = async function(destinatario, claves, cco) {
    try {
      let { data } = await axios.post(`${URL_CORREO_GENERICO}/api/send/v3`, {
        asunto: 'Se registró una nueva reserva desde la página web',
        destinatario,
        templateId: 'd-9153c95dedc340f29af09c3ba56a9888', // TEMPLATE DE SENGRID
        token: TOKEN_CORREO,
        claves
      });

      if (data.success) {
        console.trace('Correo enviado al api correctamente.');
      } else {
        console.trace('Ocurrio un error enviando el correo hacia el api>> ' + data.mensaje);
      }
    } catch (error) {
      console.log('Error en envio de correo!');
      console.log(error);
    }
  };

  this.enviarProformaAgencia = async function(destinatario, claves, cco) {
    try {
      let detalleFactura = (() => {
        let aux = '';

        claves.habitaciones.forEach((habitacion, index) => {
          let noches = moment(habitacion.feHasta)
            .add(1, 'day')
            .diff(moment(habitacion.feDesde), 'days');

          aux += `<tr>
          <td width="15%" ${index + 1 == claves.habitaciones.length ? 'rowspan="3"' : ''} align="center">${noches}</td>
          <td width="45%">
            ${habitacion.habitacion}
            <br />${habitacion.tarifa} <br />Ref. $${(+habitacion.tarifa_valor).toFixed(2)}
            <p>
              In: ${moment(habitacion.feDesde).format('DD/MM/YYYY')} / Out: ${moment(habitacion.feHasta)
            .add(1, 'day')
            .format('DD/MM/YYYY')}
              <br />${+noches + 1}D - ${noches}N
            </p>
          </td>
          <td width="20%" ${
            index + 1 == claves.habitaciones.length ? 'rowspan="3"' : ''
          } >$${(+habitacion.tarifa_valor).toFixed(2)}</td>
          <td width="20%" ${index + 1 == claves.habitaciones.length ? 'rowspan="3"' : ''} >$${(
            +habitacion.tarifa_valor * +noches
          ).toFixed(2)}</td>
        </tr>`;
        });

        return aux.replace(/\n/g, '').replace(/\t/g, '');
      })();

      detalleFactura = JSON.stringify(detalleFactura).split('');
      detalleFactura.shift();
      detalleFactura.pop();
      detalleFactura = detalleFactura.join('');

      claves = {
        ...claves,
        t_subtotal: (+claves.t_subtotal).toFixed(2),
        t_iva: (+claves.t_iva).toFixed(2),
        t_total: (+claves.t_total).toFixed(2),
        detalleFactura
      };

      let { data } = await axios.post(`${URL_CORREO_GENERICO}/api/send/v3`, {
        asunto: `Profroma #${claves.idReserva} - ${claves.hospedaje}`,
        idHospedaje: claves.idHospedaje,
        destinatario,
        cco,
        templateId: 'd-361044990fb94526805c0802ffe28054', // TEMPLATE DE SENGRID
        token: TOKEN_CORREO,
        claves
      });

      if (data.success) {
        console.info('Correo enviado al api correctamente.');
      } else {
        console.info('Ocurrio un error enviando el correo hacia el api>> ' + data.mensaje);
      }
    } catch (error) {
      console.log('Error en envio de correo!');
      console.error(error.message);
      console.trace(error);
    }
  };
}

module.exports = new CorreoGenerico();
