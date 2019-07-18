import DataAccess from './DataAccess';

class Autenticacion {
  logIn(usuario, password, res) {
    return new Promise((resolve, reject) => {
      const dataAccess = new DataAccess();

      dataAccess
        .execArrayToSp('seg_login', [usuario, password])
        .then(result => {
          if (result[0][0].err == undefined) {
            resolve({ success: true, usuario: result[0][0] });
          } else {
            reject({ success: false, mensaje: result[0][0].mensaje });
          }
        })
        .catch(error => {
          console.log('Error>> auth.logIn>>' + error);
          reject({ success: false, mensaje: result[0][0].mensaje });
        });
    });
  }
}

export default new Autenticacion();
