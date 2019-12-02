'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.UploadToGallery = void 0;

var _path = _interopRequireDefault(require('path'));

var _multer = _interopRequireDefault(require('multer'));

var _moment = _interopRequireDefault(require('moment'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var uploadDir = process.env.UPLOAD_DIR || _path['default'].join(__dirname, '../files/gallery');

var gallery = _multer['default'].diskStorage({
  destination: uploadDir,
  filename: function filename(req, file, callback) {
    var nameArray = file.originalname.split('.');
    callback(
      null,
      ''.concat((0, _moment['default'])().format('DDMMYYYYhhmmss'), '.').concat(nameArray[nameArray.length - 1])
    );
  }
});

var UploadToGallery = (0, _multer['default'])({
  storage: gallery
});
exports.UploadToGallery = UploadToGallery;
