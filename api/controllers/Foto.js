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

  async mantenimiento(foto, res) {
    const dataAcces = new DataAcces();

    try {
      let result = await dataAcces.execJsonToSp('fo_foto', foto);

      if (res) {
        if (result[0][0].error == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      } else {
        console.log('No res param sent.');
        return result;
      }
    } catch (error) {
      console.trace(error);
      res.send({ success: false, mensaje: error });
    }
  }
}

export default new Foto();
