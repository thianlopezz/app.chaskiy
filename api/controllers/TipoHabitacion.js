import DataAccess from './DataAccess';
import moment from 'moment';

class TipoHabitacion {
  get(res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_tipoHabitacion', { accion: 'C' })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> TipoHabitacion.get ==> ' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  getById(idTipoHabitacion, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_tipoHabitacion', { accion: 'C1', idTipoHabitacion })
      .then(result => {
        if (!result[0] || !result[0][0]) {
          return res.status(404).send({ success: false });
        }
        res.send({ success: true, data: result[0][0] });
      })
      .catch(error => {
        console.log('Error>> Habitacion.getById>>' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  mantenimiento(tipoHabitacion, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_tipoHabitacion', tipoHabitacion)
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> TipoHabitacion.mantenimiento ==> ' + error);
        res.send({ success: false, mensaje: error });
      });
  }
}

export default new TipoHabitacion();
