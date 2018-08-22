var mysql = require('mysql');
const process = require('process');

function Connection() {

  this.pool = null;

  this.init = function () {

    let config = {
        connectionLimit: 15,
        host: 'localhost',
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

  this.acquire = function (callback) {
    this.pool.getConnection(function (err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new Connection();
