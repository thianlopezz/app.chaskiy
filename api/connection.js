var mysql = require('mysql');
const process = require('process');

function Connection() {
  this.pool = null;

  this.init = function() {
    let config = {
      connectionLimit: 15,
      host: process.env.MYSQL_HOST || '192.168.99.100',
      port: process.env.MYSQL_PORT || 3306,
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'password',
      database: process.env.MYSQL_CHASKIY || 'chaskiy'
    };

    console.log('Conne>> params>>');
    console.log({ ...config, password: undefined });

    this.pool = mysql.createPool(config);
  };

  this.acquire = function() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection(function(error, connection) {
        if (error) {
          reject(error);
        } else {
          resolve(connection);
        }
      });
    });
  };
}

module.exports = new Connection();
