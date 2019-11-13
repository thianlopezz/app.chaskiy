const axios = require('axios');

const URL_CORREO_GENERICO = process.env.CORREO_GENERICO || 'http://localhost:3000';
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
        .then(() => {
          resolve(correo);
        })
        .catch(error => {
          console.log('Err>>' + error);
          reject(error);
        });
    });
  };

  this.enviarConfirmacionReservaWebHospedaje = async function(destinatario, claves) {
    try {
      await Axios.post(`${URL_CORREO_GENERICO}/api/send/v3`, {
        asunto: 'Se registró una nueva reserva desde la página web',
        destinatario,
        templateId: 'd-9153c95dedc340f29af09c3ba56a9888', // TEMPLATE DE SENGRID
        token: TOKEN_CORREO,
        claves
      });
    } catch (error) {
      console.log('Error en envio de correo!');
      console.log(error);
    }
  };
}

module.exports = new CorreoGenerico();
