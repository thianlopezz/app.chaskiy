const DataAccess = require('./DataAccess');

function Pais() {

  this.get = function (res) {

    const dataAccess = new DataAccess();

    dataAccess.execJsonToSp('cat_pais', { accion: 'C' })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Pago.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      })
  };

  this.mantenimiento = function (pais, res) {

    const dataAccess = new DataAccess();

    dataAccess.execJsonToSp('cat_pais', pais)
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
  };

}

module.exports = new Pais();
