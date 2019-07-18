import DataAccess from './DataAccess';
import moment from 'moment';

class Habitacion {
  get(idHospedaje, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_habitacion', { accion: 'C', idHospedaje })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Habitacion.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  getDisponibles(feDesde, feHasta, idHospedaje, res) {
    const dataAccess = new DataAccess();

    const formato = 'DD[/]MM[/]YYYY';

    if (!moment(feDesde, formato).isValid() || !moment(feHasta, formato).isValid()) {
      return res.status(404).send({
        success: false,
        mensaje: 'Las fechas no son válidas.'
      });
    }

    dataAccess
      .execArrayToSp('hab_disponibles', [feDesde, feHasta, idHospedaje])
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Habitacion.getDisponibles>>' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  mantenimiento(habitacion, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_habitacion', habitacion)
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Habitacion.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }
}

export default new Habitacion();
