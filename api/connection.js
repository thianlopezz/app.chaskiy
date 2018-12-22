var mysql = require('mysql');
const process = require('process');

function Connection() {

  this.pool = null;

  this.init = function () {

    // FIXME: setear ENV
    let config = {
      connectionLimit: 15,
      host: '192.168.99.100',
        user: 'root',
      password: 'password',
      database: 'chaskiy'
    };

    console.log('Conne>> params>>');
    console.log(config);

    this.pool = mysql.createPool(
      config
    );
  };

  this.acquire = function () {
    return new Promise((resolve, reject) => {
      this.pool.getConnection(function (error, connection) {
        if (error) {
          reject(error);
        } else {
          resolve(connection);
        }
      });
    })
  };
}

module.exports = new Connection();
