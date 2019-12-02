'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.upload = exports.s3 = void 0;

var _awsSdk = _interopRequireDefault(require('aws-sdk'));

var _multer = _interopRequireDefault(require('multer'));

var _multerS = _interopRequireDefault(require('multer-s3'));

var _moment = _interopRequireDefault(require('moment'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var storage = _multer['default'].memoryStorage({
  destination: function destination(req, file, callback) {
    callback(null, '');
  }
});

var S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID || 'AKIAI5PE2RG6EFLDO3QQ';
var S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY || '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';
var S3_BUCKET = process.env.S3_BUCKET || 'chaskiy-test';
var s3 = new _awsSdk['default'].S3({
  accessKeyId: S3_ACCESS_KEY_ID,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
  Bucket: S3_BUCKET
});
exports.s3 = s3;
var upload = (0, _multer['default'])({
  fileFilter: fileFilter,
  storage: (0, _multerS['default'])({
    s3: s3,
    bucket: S3_BUCKET,
    acl: 'public-read',
    metadata: function metadata(req, file, cb) {
      cb(null, {
        fieldName: file.fieldname
      });
    },
    key: function key(req, file, cb) {
      var nameArray = file.originalname.split('.');
      cb(
        null,
        'logos/'.concat((0, _moment['default'])().format('DDMMYYYYhhmmss'), '.').concat(nameArray[nameArray.length - 1])
      );
    }
  })
});
exports.upload = upload;

var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Tipo de archivo invalido, solo JPEG y PNG'), false);
  }
};
