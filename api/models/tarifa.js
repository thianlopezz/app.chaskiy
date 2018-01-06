
var connection = require('../connection');

function Tarifa() {

    this.get = function (params, res) {
        connection.acquire(function (err, con) {
            con.query('call ta_tarifa(\'' + params + '\')', function (err, result) {
                try {

                    con.release();

                    if (err) {

                        console.log('Error>> Tarifa.get>>' + err);
                        res.send({ success: false, mensaje: '' + err });
                    }
                    else
                        res.send({ success: true, data: result[0] });
                }
                catch (ex) {

                    console.log('Error>> ex>> Adicional.get>> ' + ex);
                    res.send({ success: false, mensaje: ex });
                }
            });
        });
    };

    this.getTipos = function (res) {
        connection.acquire(function (err, con) {
            con.query('call ta_tipos()', function (err, result) {
                try {

                    con.release();

                    if (err) {

                        console.log('Error>> Tarifa.getTipos>>' + err);
                        res.send({ success: false, mensaje: '' + err });
                    }
                    else
                        res.send({ success: true, data: result[0] });
                }
                catch (ex) {

                    console.log('Error>> ex>> Tarifa.getTipos>> ' + ex);
                    res.send({ success: false, mensaje: ex });
                }
            });
        });
    };

    this.mantenimiento = function (data, res) {

        var param = setXml(data);

        connection.acquire(function (err, con) {
            con.query('call ta_tarifa(\'' + param + '\')', function (err, result) {
                try {

                    con.release();
                    if (err) {
                        console.log('Error>> Adicional.mantenimiento>>' + err);
                        res.send({ success: false, mensaje: err });
                    }
                    else {
                        if (result[0][0].err == undefined)
                            res.send({ success: true, mensaje: result[0][0].mensaje });
                        else
                            res.send({ success: false, mensaje: result[0][0].mensaje });
                    }
                }
                catch (ex) {
                    console.log('Error>> ex>> Adicional.mantenimiento>>' + ex);
                    res.send({ success: false, mensaje: ex });
                }
            });
        });
    };

    function setXml(data) {
        
        let param = '<params accion= "' + data.accion
            + '" idTipo = "' + data.idtipo
            + '" idTarifa = "' + data.idtarifa
            + '" idHospedaje = "' + data.idHospedaje
            + '" descripcion = "' + data.tarifa
            + '" valor = "' + data.valor + '" />';
        
        console.log('param>> ' + param);
        return param;
    }

}

module.exports = new Tarifa();