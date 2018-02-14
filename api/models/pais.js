const DataAccess = require('./DataAccess');

function Pais() {

  this.get = function(params, res) {
    DataAccess.exec_arraysp('cat_pais', [params], function(error, result){
      if (error) {

        console.log('Error>> Pago.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      }
      else {
        res.send({ success: true, data: result[0] });
      }        
    });
  };

  this.mantenimiento = function(pais, res) {

    DataAccess.exec_objectsp('cat_pais', pais, function(error, result){
      if (error) {
        console.log('Error>> Pais.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      }
      else {
        if (result[0][0].err == undefined)
          res.send({ success: true, mensaje: result[0][0].mensaje });
        else
          res.send({ success: false, mensaje: result[0][0].mensaje });
      }
    });
  };

}

module.exports = new Pais();
