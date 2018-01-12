var mysql = require('mysql');

function Connection() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'admin',
      database: 'chaskiy-db',
      // socketPath:'/cloudsql/chaskiy-191704:southamerica-east1:chaskiy-db'
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new Connection();
