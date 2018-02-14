const DataAccess = require('./DataAccess');

function Pago() {

  this.get = function(params, res) {
    DataAccess.exec_arraysp('pg_pago', [params], function(error, result){
      if (error) {

        console.log('Error>> Pago.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      }
      else
        res.send({ success: true, data: result[0] });
    })
  };

  this.mantenimiento = function(pago, res) {

    DataAccess.exec_objectsp('pg_pago', pago, function(error, result){
      if (error) {
        console.log('Error>> Pago.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      }
      else {
        if (result[0][0].err == undefined){
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }          
      }
    });
  };

}

module.exports = new Pago();
