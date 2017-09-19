var mysql = require('mysql');

function Conne_generico() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 5,
      host: 'p1us8ottbqwio8hv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port: 3306,
      user: 'ftxh3xb9nlhbqkl7',
      password: 'uwwmys91wznk19ms',
      database: 'obqx4gvvsec006eh'
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new Conne_generico();
