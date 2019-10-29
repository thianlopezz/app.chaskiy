import DataAccess from './DataAccess';

class Cama {
  get(res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('ca_cama', { accion: 'C' })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Cama.get ==> ' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  getById(idCama, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('ca_cama', { accion: 'C1', idCama })
      .then(result => {
        if (!result[0] || !result[0][0]) {
          return res.status(404).send({ success: false });
        }
        res.send({ success: true, data: result[0][0] });
      })
      .catch(error => {
        console.log('Error>> Cama.getById>>' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  mantenimiento(cama, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('ca_cama', cama)
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Cama.mantenimiento ==> ' + error);
        res.send({ success: false, mensaje: error });
      });
  }
}

export default new Cama();
