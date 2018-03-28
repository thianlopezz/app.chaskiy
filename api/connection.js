var mysql = require('mysql');
const process = require('process');

function Connection() {
  this.pool = null;


  this.init = function () {


    let config = {};

    if (process.env.SQL_USER) {

      config = {
        connectionLimit: 10,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE
      };
    } else {
      config = {
        connectionLimit: 10,
        host: '35.199.127.98',
        port: 3306,
        user: 'root',
        password: 'admin',
        database: 'chaskiy-db'
      };
    }

    if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
      config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
    }

    console.log('Conne>>params>>');
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
