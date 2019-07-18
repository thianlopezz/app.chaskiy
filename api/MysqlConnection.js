import mysql from 'mysql';

class MysqlConnection {
  pool = null;

  init() {
    this.pool = mysql.createPool({
      connectionLimit: 15,
      host: process.env.MYSQL_HOST || '18.221.53.207',
      port: process.env.MYSQL_PORT || 3306,
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'katafl4mN.1',
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
