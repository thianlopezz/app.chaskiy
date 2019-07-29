import DataAccess from './DataAccess';

class Aerolinea {
  get(res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('cat_aerolinea', { accion: 'C' })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> Aerolinea.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  mantenimiento(aerolinea, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('cat_aerolinea', aerolinea)
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> Aerolinea.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }
}

export default new Aerolinea();