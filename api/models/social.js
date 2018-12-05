const DataAccess = require('./DataAccess');

function Social() {

  this.get = function (res) {

    const dataAccess = new DataAccess();

    dataAccess.execJsonToSp('cat_social', { accion: 'C' })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Social.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      })
  };

  this.mantenimiento = function (social, res) {

    const dataAccess = new DataAccess();

    dataAccess.execJsonToSp('cat_social', social)
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Social.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      })
  };

}

module.exports = new Social();
