const DataAccess = require('./DataAccess');
var md5 = require('md5');

function autenticacion() {

  this.logIn = function (usuario, password, res) {

    return new Promise((resolve, reject) => {

      const dataAccess = new DataAccess();
      
      dataAccess.execArrayToSp('seg_login', [usuario, password])
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
        })
    })
  };

}

module.exports = new autenticacion();
