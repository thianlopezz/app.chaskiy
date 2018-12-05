const DataAccess = require('./DataAccess');

function Fuente() {

  this.get = function (params, res) {

    const dataAccess = new DataAccess();

    dataAccess.execArrayToSp('cat_fuente', params)
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Fuente.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      })
  };

  this.mantenimiento = function (fuente, res) {

    const dataAccess = new DataAccess();

    dataAccess.execJsonToSp('cat_fuente', fuente)
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Fuente.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      })
  };

}

module.exports = new Fuente();
