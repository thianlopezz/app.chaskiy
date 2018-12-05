const DataAccess = require('./DataAccess');

const CorreoGenerico = require('./CorreoGenerico');

function Pago() {

    this.get = function (params, res) {

        const dataAccess = new DataAccess();

        dataAccess.execJsonToSp('pg_pago', params)
            .then(result => {
                res.send({ success: true, data: result[0] });
            })
            .catch(error => {
                console.log('Error>> Pago.get>>' + error);
                res.send({ success: false, mensaje: '' + error });
            })
    };

    this.mantenimiento = function (pago, res) {

        const dataAccess = new DataAccess();

        dataAccess.execJsonToSp('pg_pago', pago)
            .then(result => {
                if (result[0][0].err == undefined) {

                    // ENVIO DE RECEPCION DE PAGO
                    if (pago.accion === 'I') {

                        const claves = result[0][0];
                        const plantilla = './plantillas/Chaskiy/recepcion_pago';
                        const asunto = 'Recepción de pago';
                        const destinatario = claves.correo;
                        const idHospedaje = claves.idHospedaje;

                        CorreoGenerico.enviar(asunto, destinatario, claves, plantilla, idHospedaje);
                    }

                    res.send({ success: true, mensaje: result[0][0].mensaje });
                } else {
                    res.send({ success: false, mensaje: result[0][0].mensaje });
                }
            })
            .catch(error => {
                console.log('Error>> Pago.mantenimiento>>' + error);
                res.send({ success: false, mensaje: error });
            })
    };

}

module.exports = new Pago();
