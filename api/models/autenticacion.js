const DataAccess = require('./DataAccess');
var md5 = require('md5');

function autenticacion() {

  this.logIn = function(usuario, password, res, callback) {
    DataAccess.exec_arraysp('seg_login', [usuario, md5(password)], function(error, result){

      if (error) {

        console.log('Error>> auth.logIn>>' + error);
        return callback({ success: false, mensaje: '' + error });
      } else {

        if (result[0][0].err == undefined){
          return callback({ success: true, usuario: result[0][0] });
        }          
        else {
          return callback({ success: false, mensaje: result[0][0].mensaje });
        }          
      }
    })
  };

}

module.exports = new autenticacion();
