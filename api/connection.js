var mysql = require("mysql");
const process = require("process");

function Connection() {
  this.pool = null;

  this.init = function() {
    let config = {
      connectionLimit: 15,
      host: process.env.MYSQL_HOST || "localhost",
      port: process.env.MYSQL_PORT || 3306,
      user: process.env.MYSQL_USER || "root",
      password: process.env.MYSQL_PASSWORD || "cha$key16",
      database: process.env.MYSQL_CHASKIY || "chaskiy"
    };

    console.log("Conne>> params>>");
    console.log(config);

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
