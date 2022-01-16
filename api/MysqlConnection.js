import mysql from 'mysql';

class MysqlConnection {
  pool = null;

  init() {
    this.pool = mysql.createPool({
      connectionLimit: 15,
      host: process.env.MYSQL_HOST || 'dcristhi.c7tfidz7gce3.us-east-2.rds.amazonaws.com',
      port: process.env.MYSQL_PORT || 3306,
      user: process.env.MYSQL_USER || 'admin',
      password: process.env.MYSQL_PASSWORD || 'JD8g53rt4KmFDaEzTPgb',
      database: process.env.MYSQL_CHASKIY || 'chaskiy'
    });
  }

  acquire() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection(function(error, connection) {
        if (error) {
          reject(error);
        } else {
          resolve(connection);
        }
      });
    });
  }
}

export default new MysqlConnection();
