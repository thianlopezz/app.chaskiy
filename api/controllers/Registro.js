import DataAcess from './DataAccess';
import moment from 'moment';
import md5 from 'md5';
import axios from 'axios';

const API = process.env.CORREO_GENERICO || 'http://54.215.228.166:3000';
// const API = process.env.CORREO_GENERICO || 'https://correo-generico.herokuapp.com';

const TOKEN_CORREO = process.env.TOKEN_CORREO || '123';

class Registro {
  enviaRecupera(registro, res) {
    var token = md5(registro.correo + '' + moment().format('DDMMYYYYhhmmss'));
    var accion = 'R';

    var params = '<params accion= "' + accion + '" correo= "' + registro.correo + '" token= "' + token + '" />';

    const dataAcess = new DataAcess();

    dataAcess
      .execArrayToSp('reg_recupera', [params])
      .then(result => {
        if (result[0][0].err == undefined) {
          var claves = 'nombre_usuario:' + result[0][0].nombre + ';tokenRecupera:' + tokenRecupera;

          enviaCorreo(
            result[0][0].idHospedaje,
            claves,
            'Recuperacion de contraseña',
            './plantillas/Chaskiy/recupera_pass',
            _registro.correo,
            function(result) {
              if (!result.success) {
                console.log('Error>> Register.enviaRecupera>> Error en el registro de envio de correo');
              }

              res.send({ success: true, mensaje: '' });
            }
          );
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Register.enviaRecupera>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }

  recuperaPassword(registro, res) {
    var accion = 'R0';

    var params =
      '<params accion= "' + accion + '" token= "' + registro.token + '" pass= "' + md5(registro.password) + '" />';

    const dataAcess = new DataAcess();

    dataAcess
      .execArrayToSp('reg_recupera', [params])
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Register.recuperaPassword>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }

  password(registro, res) {
    const params =
      '<params idUsuario= "' +
      registro.idUsuario +
      '" pass= "' +
      md5(registro.password1) +
      '" pass0= "' +
      md5(registro.password) +
      '" />';

    const dataAcess = new DataAcess();

    dataAcess
      .execArrayToSp('reg_password', [params])
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Register.password>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }

  registro(registro, res) {
    var token = md5(registro.correo + '' + moment().format('DDMMYYYYhhmmss'));

    var params =
      '<params idPais= "' +
      _registro.valuePa +
      '" hospedaje = "' +
      _registro.hospedaje +
      '" ciudad = "' +
      _registro.ciudad +
      '" direccion = "' +
      _registro.direccion +
      '" correo = "' +
      _registro.correo +
      '" nombre = "' +
      _registro.nombre +
      '" pass = "' +
      md5(_registro.password) +
      '" token = "' +
      token +
      '" />';

    const dataAcess = new DataAcess();

    dataAcess
      .execArrayToSp('reg_registro', [params])
      .then(result => {
        if (result[0][0].err == undefined) {
          var claves = 'nombre_usuario:' + _registro.nombre + ';tokenRegistro:' + tokenRegistro;

          enviaCorreo(
            result[0][0].idHospedaje,
            claves,
            'Confirmación de registro',
            './plantillas/Chaskiy/confirmacion_cuenta',
            _registro.correo,
            function(result) {
              if (!result.success) {
                console.log('Error>> Register.registro>> Error en el registro de envio de correo');
              }
              res.send({ success: true, mensaje: 'Usuario activado' });
            }
          );
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Register.registro>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }

  isRegister(usuario, res) {
    const dataAcess = new DataAcess();

    dataAcess
      .execArrayToSp('reg_isRegister', [usuario])
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Register.isRegister>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }

  activaToken(token, res) {
    const dataAcess = new DataAcess();

    dataAcess
      .execArrayToSp('reg_activa', [token])
      .then(result => {
        console.log('Error>> Register.activaToken>>' + error);
        res.send({ success: false, mensaje: error });
      })
      .catch(error => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      });
  }

  enviaCorreo = function(idHospedaje, claves, asunto, plantilla, destinatario, callback) {
    var correo = {
      idHospedaje: idHospedaje,
      asunto: asunto,
      destinatario: destinatario,
      claves: claves,
      plantilla: plantilla,
      token: TOKEN_CORREO
    };

    axios
      .post(`${API}/api/send`, correo)
      .then(result => {
        callback(result.data);
      })
      .catch(error => {
        console.log('Err>>' + error);
        callback(error);
      });
  };
}

export default new Registro();
