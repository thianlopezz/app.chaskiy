'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _Foto = _interopRequireDefault(require('../controllers/Foto'));

var _multer = _interopRequireDefault(require('multer'));

var _awsSdk = _interopRequireDefault(require('aws-sdk'));

var _moment = _interopRequireDefault(require('moment'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

var S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID || 'AKIAIC2AIUCB5QSGXIFQ';
var S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY || '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';
var S3_BUCKET = process.env.S3_BUCKET || 'chaskiy-test';

var storage = _multer['default'].memoryStorage({
  destination: function destination(req, file, callback) {
    callback(null, '');
  }
});

var multipleUpload = (0, _multer['default'])({
  storage: storage
}).array('files', 10);

_awsSdk['default'].config.update({
  accessKeyId: S3_ACCESS_KEY_ID,
  secretAccessKey: S3_SECRET_ACCESS_KEY
});

var s3Bucket = new _awsSdk['default'].S3();

var _default = function _default(router) {
  router.post('/galeria/upload', multipleUpload, function(req, res) {
    var files = req.files;
    s3Bucket.createBucket(function() {
      var ResponseData = [];
      files.map(function(item) {
        var nameArray = item.originalname.split('.');
        var params = {
          Bucket: S3_BUCKET + '/galeria',
          //DDMMYYYYhhmmss
          Key: ''.concat((0, _moment['default'])().format('x'), '.').concat(nameArray[nameArray.length - 1]),
          Body: item.buffer,
          ACL: 'public-read'
        };
        s3Bucket.upload(
          params,
          /*#__PURE__*/
          (function() {
            var _ref = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(err, data) {
                var result;
                return regeneratorRuntime.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          if (!err) {
                            _context.next = 5;
                            break;
                          }

                          console.trace(err);
                          res.json({
                            error: true,
                            Message: err
                          });
                          _context.next = 16;
                          break;

                        case 5:
                          ResponseData.push(data);
                          _context.prev = 6;
                          _context.next = 9;
                          return _Foto['default'].mantenimiento({
                            archivo: data.Location,
                            idHospedaje: req.body.idHospedaje,
                            accion: 'I'
                          });

                        case 9:
                          result = _context.sent;
                          _context.next = 15;
                          break;

                        case 12:
                          _context.prev = 12;
                          _context.t0 = _context['catch'](6);
                          console.trace(_context.t0);

                        case 15:
                          if (ResponseData.length == files.length) {
                            res.send({
                              success: true,
                              mensaje: 'Las fotos se subieron correctamente'
                            });
                          }

                        case 16:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  null,
                  [[6, 12]]
                );
              })
            );

            return function(_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })()
        );
      });
    });
  });
};

exports['default'] = _default;
