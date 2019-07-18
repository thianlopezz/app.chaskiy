import path from 'path';

import multer from 'multer';
import moment from 'moment';

const gallery = multer.diskStorage({
  destination: path.join(__dirname, '../files/gallery'),
  filename(req, file, callback) {
    let nameArray = file.originalname.split('.');
    callback(null, `${moment().format('DDMMYYYYhhmmss')}.${nameArray[nameArray.length - 1]}`);
  }
});

export const UploadToGallery = multer({ storage: gallery });
