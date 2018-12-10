const moment = require('moment');

const DataAccess = require('./DataAccess');

function Estadistica() {

  this.getPagos = function (params, res) {

    const dataAccess = new DataAccess();

    params.feDesde = moment(params.feDesde).format('YYYY-MM-DD');
    params.feHasta = moment(params.feHasta).format('YYYY-MM-DD');

    dataAccess.execJsonToSp('st_statistic', Object.assign({accion: 'C1'}, params))
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
