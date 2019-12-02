import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import moment from 'moment';

const storage = multer.memoryStorage({
  destination: function(req, file, callback) {
    callback(null, '');
  }
});

const S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID || 'AKIAI5PE2RG6EFLDO3QQ';
const S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY || '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';
const S3_BUCKET = process.env.S3_BUCKET || 'chaskiy-test';

const s3 = new AWS.S3({
  accessKeyId: S3_ACCESS_KEY_ID,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
  Bucket: S3_BUCKET
});

const upload = multer({
  fileFilter: fileFilter,
  storage: multerS3({
    s3: s3,
    bucket: S3_BUCKET,
    acl: 'public-read',
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      let nameArray = file.originalname.split('.');
      cb(null, `logos/${moment().format('DDMMYYYYhhmmss')}.${nameArray[nameArray.length - 1]}`);
    }
  })
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Tipo de archivo invalido, solo JPEG y PNG'), false);
  }
};

export { s3, upload };
