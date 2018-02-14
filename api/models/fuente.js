const DataAccess = require('./DataAccess');

function Fuente() {

  this.get = function(params, res) {
    DataAccess.exec_arraysp('cat_fuente', [params], function(error, result){
      if (error) {

        console.log('Error>> Fuente.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      }
      else {
        res.send({ success: true, data: result[0] });
      }        
    });
  };

  this.mantenimiento = function(fuente, res) {

    DataAccess.exec_objectsp('cat_fuente', fuente, function(error, result){
      if (error) {
        console.log('Error>> Fuente.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      } else {
        if (result[0][0].err == undefined){
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }          
      }
    })
  };

}

module.exports = new Fuente();
