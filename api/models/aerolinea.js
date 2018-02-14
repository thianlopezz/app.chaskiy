const DataAccess = require('./DataAccess');

function Aerolinea() {

  this.get = function (params, res) {
    DataAccess.exec_arraysp('cat_aerolinea', [params], function (error, result) {
      if (error) {

        console.log('Error>> Aerolinea.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      }
      else {
        res.send({ success: true, data: result[0] });
      }
    })
  };

  this.mantenimiento = function (aerolinea, res) {
    DataAccess.exec_objectsp('cat_aerolinea', [aerolinea], function (error, result) {
      if (error) {
        console.log('Error>> Aerolinea.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      }
      else {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        }
        else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }

      }
    })    
  };

}

module.exports = new Aerolinea();
