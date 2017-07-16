var mysql = require('mysql');

function Connection() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 5,
      host: 'jj820qt5lpu6krut.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port:3306,
      user: 'a88o2yzlm52ic8qk',
      password: 'a9p8bz388mkxe4r9',
      database: 'klqwovr2osphw94b'
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new Connection();