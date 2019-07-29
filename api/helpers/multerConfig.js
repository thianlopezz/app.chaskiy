import path from 'path';

import multer from 'multer';
import moment from 'moment';

const uploadDir = process.env.UPLOAD_DIR || path.join(__dirname, '../files/gallery');

const gallery = multer.diskStorage({
  destination: uploadDir,
  filename(req, file, callback) {
    let nameArray = file.originalname.split('.');
    callback(null, `${moment().format('DDMMYYYYhhmmss')}.${nameArray[nameArray.length - 1]}`);
  }
});

export const UploadToGallery = multer({ storage: gallery });
