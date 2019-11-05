const axios = require('axios');

const API = process.env.CORREO_GENERICO || 'http://54.215.228.166:3000';
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
        .post(`${API}/api/send/v2`, correo)
        .then(() => {
          resolve(correo);
        })
        .catch(error => {
          console.log('Err>>' + error);
          reject(error);
        });
    });
  };
}

module.exports = new CorreoGenerico();
