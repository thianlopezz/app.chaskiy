import DataAccess from './DataAccess';

class FormaPago {
  get(res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('cat_formapago', { accion: 'C' })
      .then(result => {
        res.send({ success: true, data: result[0] });
      })
      .catch(error => {
        console.log('Error>> FormaPago.get>>' + error);
        res.send({ success: false, mensaje: '' + error });
      });
  }

  mantenimiento(formaPago, res) {
    const dataAccess = new DataAccess();

    dataAccess
      .execJsonToSp('cat_formapago', formaPago)
      .then(result => {
        if (result[0][0].err == undefined) {
          res.send({ success: true, mensaje: result[0][0].mensaje });
        } else {
          res.send({ success: false, mensaje: result[0][0].mensaje });
        }
      })
      .catch(error => {
        console.log('Error>> FormaPago.mantenimiento>>' + error);
        res.send({ success: false, mensaje: error });
      });
  }
}

export default new FormaPago();
