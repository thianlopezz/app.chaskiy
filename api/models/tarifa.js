
const DataAccess = require('./DataAccess');

function Tarifa() {

    this.get = function (idHospedaje, res) {

        const dataAccess = new DataAccess();

        dataAccess.execJsonToSp('ta_tarifa', { accion: 'C1', idHospedaje })
            .then(result => {
                let agrupado = [];
                for (let i = 0; i < result[0].length; i++) {

                    agrupado.push({
                        idTipo: result[0][i].idTipo,
                        tipoTarifa: result[0][i].tipoTarifa,
                        tarifas: result[1].filter(function (val) {
                            return val.idTipo == result[0][i].idTipo;
                        })
                    });
                }
                res.send({ success: true, data: result[1], agrupado: agrupado });
            })
            .catch(error => {
                console.log('Error>> Tarifa.getAgrupado>>' + error);
                res.send({ success: false, mensaje: '' + error });
            })
    };

    this.getTipos = function (res) {

        const dataAccess = new DataAccess();

        dataAccess.execArrayToSp('ta_tipos')
            .then(result => {
                res.send({ success: true, data: result[0] });
            })
            .catch(error => {
                console.log('Error>> Tarifa.getTipos>>' + error);
                res.send({ success: false, mensaje: '' + error });
            })
    };

    this.mantenimiento = function (tarifa, res) {

        const dataAccess = new DataAccess();

        dataAccess.execJsonToSp('ta_tarifa', tarifa)
            .then(result => {
                if (result[0][0].err == undefined) {
                    res.send({ success: true, mensaje: result[0][0].mensaje });
                } else {
                    res.send({ success: false, mensaje: result[0][0].mensaje });
                }
            })
            .catch(error => {
                console.log('Error>> Tarifa.mantenimiento>>' + error);
                res.send({ success: false, mensaje: error });
            })
    };
}

module.exports = new Tarifa();
