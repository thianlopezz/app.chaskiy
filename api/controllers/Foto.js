import DataAcces from './DataAccess';

class Foto {
  get(idHospedaje, res) {
    const dataAcces = new DataAcces();

    dataAcces
      .execJsonToSp('fo_foto', { accion: 'C', idHospedaje })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Foto.get>>' + error);
        res.send({ success: false, mensaje: '' + error.message });
      });
  }

  mantenimiento(foto, res) {
    const dataAcces = new DataAcces();

    dataAcces
      .execJsonToSp('fo_foto', foto)
      .then(result => {
        if (result[0][0].error == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Foto.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }
}

export default new Foto();
