const DataAccess = require('./DataAccess');

function Estadistica() {

  this.get = function(params, res) {
    DataAccess.exec_arraysp('st_statistic', [params], function(error, result){
      if (error) {

        console.log('Error>> Statistic.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      }
      else
        res.send({ success: true, data: result[0] });
    })
  }; 

}

module.exports = new Estadistica();
