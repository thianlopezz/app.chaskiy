import DataAccess from './DataAccess';

class Especificacion {
  get(res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_especificacion', { accion: 'C' })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Especificacion.get ==> ' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  getById(idEspecificacion, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_especificacion', { accion: 'C1', idEspecificacion })
      .then(result => {
        if (!result[0] || !result[0][0]) {
          return res.status(404).send({ success: false });
        }
        res.send({ success: true, data: result[0][0] });
      })
      .catch(error => {
        console.log('Error>> Especificacion.getById>>' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  mantenimiento(especificacion, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('hab_especificacion', especificacion)
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Especificacion.mantenimiento ==> ' + error);
        res.send({ success: false, mensaje: error });
      });
  }
}

export default new Especificacion();
