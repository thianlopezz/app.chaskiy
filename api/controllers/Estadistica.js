import moment from 'moment';

import DataAccess from './DataAccess';

class Estadistica {
  getPagos(params, res) {
    const dataAccess = new DataAccess();

    params.feDesde = moment(params.feDesde).format('YYYY-MM-DD');
    params.feHasta = moment(params.feHasta).format('YYYY-MM-DD');

    dataAccess
      .execJsonToSp('st_statistic', Object.assign({ accion: 'C1' }, params))
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Statistic.getPagos>>' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  getOcupacionPorRango(params, res) {
    const dataAccess = new DataAccess();

    params.feDesde = moment(params.feDesde).format('YYYY-MM-DD');
    params.feHasta = moment(params.feHasta).format('YYYY-MM-DD');

    dataAccess
      .execJsonToSp('st_statistic', Object.assign({ accion: 'C2' }, params))
      .then(result => {
        res.send({ success: true, data: this.getOcupacion(result[0], params) });
      })
      .catch(error => {
        console.log('Error>> Statistic.getOcupacionPorMes>>' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  getCaptacion(idHospedaje, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('st_statistic', { accion: 'C3', idHospedaje })
      .then(result => {
        const data = {
          fuentes: result[0],
          porFuente: result[1],
          totalPorMes: result[2]
        };

        res.send({ success: true, data });
      })
      .catch(error => {
        console.log('Error>> Statistic.getPagos>>' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  getOcupacion = function(result, params) {
    let feDesde = moment(params.feDesde);
    let feHasta = moment(params.feHasta);

    let meses = [];

    while (feDesde.isSameOrBefore(feHasta)) {
      meses.push({ mes: +feDesde.format('MM'), anio: +feDesde.format('YYYY') });
      feDesde.add(1, 'months');
    }

    feDesde = moment(params.feDesde);

    meses.forEach(mesAnio => {
      const feDesde = moment(mesAnio.anio + '-' + mesAnio.mes + '-' + '01', 'YYYY-MM-DD');
      const feHasta = moment(mesAnio.anio + '-' + mesAnio.mes + '-' + '01', 'YYYY-MM-DD').endOf('month');

      const porHabitaciones = result.filter(
        x =>
          (moment(x.feDesde).isSameOrAfter(feDesde) && moment(x.feDesde).isSameOrBefore(feHasta)) ||
          (moment(x.feHasta).isSameOrAfter(feDesde) && moment(x.feHasta).isSameOrBefore(feHasta))
      );

      let ocupacion = 0;

      porHabitaciones.forEach((porHabitacion, i) => {
        porHabitacion.feDesde = moment(porHabitacion.feDesde);
        porHabitacion.feHasta = moment(porHabitacion.feHasta);

        if (porHabitacion.feDesde.isBefore(feDesde)) {
          porHabitacion.feDesde = feDesde;
        }

        if (porHabitacion.feHasta.isAfter(feHasta)) {
          porHabitacion.feHasta = feHasta;
        }

        ocupacion += porHabitacion.feHasta.diff(porHabitacion.feDesde, 'days') + 1;
      });

      mesAnio.ocupacion = ocupacion;
    });

    return meses;
  };
}

export default new Estadistica();
