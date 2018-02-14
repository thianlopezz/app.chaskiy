const DataAccess = require('./DataAccess');

function Social() {
  this.get = function(params, res) {

    DataAccess.exec_arraysp('cat_social', [params], function (error, result) {

      if (error) {

        console.log('Error>> Social.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      }
      else {
        res.send({ success: true, data: result[0] });
      }        
    })
  };

  this.mantenimiento = function(social, res) {

    DataAccess.exec_objectsp('cat_social', social, function(error, result){
      if (error) {
        console.log('Error>> Social.mantenimiento>>' + error);
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

module.exports = new Social();
