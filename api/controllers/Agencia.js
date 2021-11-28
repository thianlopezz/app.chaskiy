import DataAcces from './DataAccess';

class Agencia {
  get(idHospedaje, res) {
    const dataAcces = new DataAcces();

    dataAcces
      .execJsonToSp('ag_agencia', { accion: 'C', idHospedaje })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Agencia.get>>' + error);
        res.send({ success: false, mensaje: '' + error.message });
      });
  }

  mantenimiento(agencia, res) {
    const dataAcces = new DataAcces();

    dataAcces
      .execJsonToSp('ag_agencia', agencia)
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Agencia.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }
}

export default new Agencia();
