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

  getById(idHabitacion, idHospedaje, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_habitacion', { accion: 'C1', idHabitacion, idHospedaje })
      .then(result => {
        if (!result[0] || !result[0][0]) {
          return res.status(404).send({ success: false });
        }

        let data = result[0][0];
        data.especificaciones = result[1];

        res.send({ success: true, data });
      })
      .catch(error => {
        console.log('Error>> Habitacion.getById>>' + error);
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

    habitacion = { ...habitacion, idTipoHabitacion: habitacion.idTipoHabitacion || 0 };

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

  getImages(idHabitacion, idHospedaje, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_foto', { accion: 'C', idHospedaje, idHabitacion })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Habitacion.getImages>>' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  addImage(params, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_foto', { accion: 'I', ...params })
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Habitacion.addImage ==> ', error);
        res.send({ success: false, mensaje: error });
      });
  }

  feature(params, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_featureFoto', { ...params })
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Habitacion.feature>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }

  addEspecificacion(params, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_addEspecificacion', { ...params })
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Habitacion.addEspecificacion ==> ' + error);
        res.send({ success: false, mensaje: error });
      });
  }

  deleteEspecificacion(params, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_deleteEspecificacion', { ...params })
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Habitacion.deleteEspecificacion ==> ', error);
        res.send({ success: false, mensaje: error });
      });
  }

  deleteImage(params, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_foto', { accion: 'D', ...params })
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Habitacion.addImage ==> ', error);
        res.send({ success: false, mensaje: error });
      });
  }
}

export default new Habitacion();
