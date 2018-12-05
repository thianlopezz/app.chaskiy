const DataAccess = require('./DataAccess');

function Estadistica() {

  this.get = function (params, res) {

    const dataAccess = new DataAccess();

    dataAccess.execJsonToSp('st_statistic', params)
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Statistic.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      })
  };

}

module.exports = new Estadistica();
