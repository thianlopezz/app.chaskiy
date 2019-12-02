import Foto from '../controllers/Foto';
import multer from 'multer';
import AWS from 'aws-sdk';
import moment from 'moment';

const S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID || 'AKIAIC2AIUCB5QSGXIFQ';
const S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY || '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';
const S3_BUCKET = process.env.S3_BUCKET || 'chaskiy-test';

const storage = multer.memoryStorage({
  destination: function(req, file, callback) {
    callback(null, '');
  }
});

const multipleUpload = multer({ storage }).array('files', 10);

AWS.config.update({
  accessKeyId: S3_ACCESS_KEY_ID,
  secretAccessKey: S3_SECRET_ACCESS_KEY
});

const s3Bucket = new AWS.S3();

export default router => {
  router.post('/galeria/upload', multipleUpload, (req, res) => {
    const files = req.files;

    s3Bucket.createBucket(function() {
      let ResponseData = [];

      files.map(item => {
        let nameArray = item.originalname.split('.');
        var params = {
          Bucket: S3_BUCKET + '/galeria',
          //DDMMYYYYhhmmss
          Key: `${moment().format('x')}.${nameArray[nameArray.length - 1]}`,
          Body: item.buffer,
          ACL: 'public-read'
        };

        s3Bucket.upload(params, async function(err, data) {
          if (err) {
            console.trace(err);
            res.json({ error: true, Message: err });
          } else {
            ResponseData.push(data);

            try {
              let result = await Foto.mantenimiento({
                archivo: data.Location,
                idHospedaje: req.body.idHospedaje,
                accion: 'I'
              });
            } catch (error) {
              console.trace(error);
            }

            if (ResponseData.length == files.length) {
              res.send({
                success: true,
                mensaje: 'Las fotos se subieron correctamente'
              });
            }
          }
        });
      });
    });
  });
};
