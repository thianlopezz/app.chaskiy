
const DataAcess = require('./DataAccess');

function Tarifa() {

    this.get = function (params, res) {

        DataAcess.exec_arraysp('ta_tarifa', [params], function(error, result){
            if (error) {

                console.log('Error>> Tarifa.getAgrupado>>' + error);
                res.send({ success: false, mensaje: '' + error });
            } else {

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
            }
        });
    };

    this.getTipos = function (res) {
        DataAcess.exec_arraysp('ta_tipos', [], function(error, result){
            if (error) {

                console.log('Error>> Tarifa.getTipos>>' + error);
                res.send({ success: false, mensaje: '' + error });
            }
            else {
                res.send({ success: true, data: result[0] });
            }                
        })
    };

    this.mantenimiento = function (tarifa, res) {

        DataAcess.exec_objectsp('ta_tarifa', tarifa, function(error, result){
            if (error) {
                console.log('Error>> Tarifa.mantenimiento>>' + error);
                res.send({ success: false, mensaje: error });
            }
            else {
                if (result[0][0].err == undefined)
                    res.send({ success: true, mensaje: result[0][0].mensaje });
                else
                    res.send({ success: false, mensaje: result[0][0].mensaje });
            }
        })
    };
}

module.exports = new Tarifa();
