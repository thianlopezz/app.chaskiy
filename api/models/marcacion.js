const moment = require("moment");
const DataAccess = require("./DataAccess");

function Marcacion() {
  this.get = async function(idHospedaje, res) {
    const dataAccess = new DataAccess();

    try {
      let result = await dataAccess.execJsonToSp("ma_marcacion", {
        accion: "C",
        idHospedaje
      });
      res.send({ success: true, data: result[0] });
    } catch (error) {
      console.log("Error>> Marcacion.get>>" + error);
      res.send({ success: false, mensaje: "" + error });
    }
  };

  this.marcar = async function(params, res) {
    params.feEntrada = moment(params.feEntrada).format("YYYY-MM-DD HH:mm:ss");

    if (params.feSalida) {
      params.feSalida = moment(params.feSalida).format("YYYY-MM-DD HH:mm:ss");
    }

    const dataAccess = new DataAccess();

    try {
      let result = await dataAccess.execJsonToSp("ma_marcacion", params);

      if (result[0][0].error === undefined) {
        res.send({ success: true, ...result[0][0] });
      } else {
        res.send({ success: true, ...result[0][0] });
      }
    } catch (error) {
      console.log("Error>> Marcacion.marcar>>" + error);
      res.send({ success: false, mensaje: "" + error });
    }
  };
}

module.exports = new Marcacion();
