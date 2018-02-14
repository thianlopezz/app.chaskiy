const DataAcces = require('./DataAccess');

function Adicional() {

  this.get = function (params, res) {
    DataAcces.exec_arraysp('ad_adicional', [params], function (error, result) {
      if (error) {

        console.log('Error>> Adicional.get>>' + error);
        res.send({ success: false, mensaje: '' + error.message });
      }
      else
        res.send({ success: true, data: result[0] });
    
    })
};

this.mantenimiento = function (adicional, res) {
  DataAcces.exec_objectsp('ad_adicional', adicional, function(error, result){
    if (error) {
      console.log('Error>> Adicional.mantenimiento>>' + error);
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

module.exports = new Adicional();
