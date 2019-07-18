import MysqlConnection from '../MysqlConnection';

export default class DataAccess {
  // ('nombreDeStoreProcedure', objeto)
  execJsonToSp(stored_procedure, data = {}) {
    return new Promise((resolve, reject) => {
      MysqlConnection.acquire()
        .then(conn => {
          const exec = `call ${stored_procedure}('${JSON.stringify(data)}')`;
          console.log('exec>> ' + exec);
          conn.query(exec, function(error, result) {
            conn.release();
            if (error) {
              console.log('Error>> Metodo: "execJsonToSp", "con.query">> ' + error);
              reject(error);
            } else {
              resolve(result);
            }
          });
        })
        .catch(error => {
          console.log('Error>> Metodo: "execJsonToSp", "connection.acquire">> ' + error);
          reject(error);
        });
    });
  }

  execArrayToSp(stored_procedure, data = []) {
    return new Promise((resolve, reject) => {
      MysqlConnection.acquire()
        .then(conn => {
          const params = this.getParamsArray(data);
          const exec = 'call ' + stored_procedure + '(' + params + ')';
          console.log('exec>> ' + exec);
          conn.query(exec, function(error, result) {
            conn.release();
            if (error) {
              console.log('Error>> Metodo: "execArrayToSp", "con.query">> ' + error);
              reject(error);
            } else {
              resolve(result);
            }
          });
        })
        .catch(error => {
          console.log('Error>> Metodo: "execArrayToSp", "connection.acquire">> ' + error);
          reject(error);
        });
    });
  }

  execQuery(sql) {
    return new Promise((resolve, reject) => {
      MysqlConnection.acquire()
        .then(conn => {
          console.log('query>> ' + sql);
          conn.query(sql, function(error, result) {
            conn.release();
            if (error) {
              console.log('Error>> Metodo: "execQuery", "con.query">> ' + error);
              reject(error);
            } else {
              resolve(result);
            }
          });
        })
        .catch(error => {
          console.log('Error>> Metodo: "execQuery", "connection.acquire">> ' + error);
          reject(error);
        });
    });
  }

  getParamsArray(array) {
    let params = '';
    for (let i = 0; i < array.length; i++) {
      if (i < array.length - 1) {
        params += "'" + array[i] + "',";
      } else if (i === array.length - 1) {
        params += "'" + array[i] + "'";
      }
    }
    return params;
  }
}
