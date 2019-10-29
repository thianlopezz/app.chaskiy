import DataAccess from './DataAccess';
import moment from 'moment';

class Habitacion {
  get(idHospedaje, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_habitacion', { accion: 'C', idHospedaje })
      .then(result => {
        let habitaciones = result[0].map(habitacion => {
          return {
            ...habitacion,
            variantes: result[1].filter(tipo => (tipo.idHabitacion = habitacion.idHabitacion))
          };
        });

        res.send({ success: true, data: habitaciones });
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
        data.fotos = result[2];
        data.foto = this.getFeaturedFoto(data.fotos);
        data.variantes = this.getVariantes(result[3], result[4]);

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
        let habitaciones = result[0].map(habitacion => {
          return {
            ...habitacion,
            variantes: result[1].filter(tipo => (tipo.idHabitacion = habitacion.idHabitacion))
          };
        });

        res.send({ success: true, data: habitaciones });
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

  addCama(params, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_addCama', { ...params })
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Habitacion.addCama ==> ' + error);
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

  deleteCama(params, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_deleteCama', { ...params })
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

  saveTipoHabitacion(params, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_saveTipoHabitacion', { ...params })
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Habitacion.saveTipoHabitacion>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }

  saveTarifa(params, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_saveTarifa', { ...params })
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Habitacion.saveTarifa>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }

  saveCapacidad(params, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_saveCapacidad', { ...params })
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Habitacion.saveCapacidad>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }

  getFeaturedFoto(fotos = []) {
    let foto = fotos.find(foto => foto.featured == 1);

    if (foto) {
      return foto.archivo;
    } else if (fotos[0]) {
      return fotos[0].archivo;
    } else return null;
  }

  getVariantes(habitacionTipoHabitacion, habitacionCama) {
    return habitacionTipoHabitacion.map(item => {
      return {
        ...item,
        camas: habitacionCama.filter(
          habCama => habCama.idHabitacion == item.idHabitacion && habCama.idTipoHabitacion == item.idTipoHabitacion
        )
      };
    });
  }
}

export default new Habitacion();
