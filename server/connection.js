var mysql = require('mysql');

function Connection() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 5,
      host: 'vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port:3306,
      user: 'p5vt0h10xev9w1r4',
      password: 'ssuoi1i5owi9vu4s',
      database: 'q3p4w4hrpkpp1urq'
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new Connection();