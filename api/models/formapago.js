const DataAccess = require('./DataAccess');

function FormaPago() {

  this.get = function(params, res) {
    DataAccess.exec_arraysp('cat_formapago', [params], function(error, result){
      if (error) {

        console.log('Error>> FormaPago.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      }
      else
        res.send({ success: true, data: result[0] });
    })
  };

  this.mantenimiento = function(formaPago, res) {
    //habitacion.idHospedaje = 1;
    DataAccess.exec_objectsp('cat_formapago', formapago, function(error, result){
      if (error) {
        console.log('Error>> FormaPago.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      }
      else {
        if (result[0][0].err == undefined)
          res.send({ success: true, mensaje: result[0][0].mensaje });
        else
          res.send({ success: false, mensaje: result[0][0].mensaje });
      }
    })
  };

}

module.exports = new FormaPago();
