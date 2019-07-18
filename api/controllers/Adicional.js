import DataAcces from './DataAccess';

class Adicional {
  get(idHospedaje, res) {
    const dataAcces = new DataAcces();

    dataAcces
      .execJsonToSp('ad_adicional', { accion: 'C', idHospedaje })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Adicional.get>>' + error);
        res.send({ success: false, mensaje: '' + error.message });
      });
  }

  mantenimiento(adicional, res) {
    const dataAcces = new DataAcces();

    dataAcces
      .execJsonToSp('ad_adicional', adicional)
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Adicional.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }
}

export default new Adicional();
