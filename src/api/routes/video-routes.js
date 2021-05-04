import express from 'express';
import multer from 'multer';
import videoController from '../controllers/video-controller';

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "video/x-flv" || file.mimetype == "video/mp4" || file.mimetype == "application/x-mpegURL" ||
         file.mimetype == "video/MP2T" || file.mimetype == "video/x-msvideo" || 
         file.mimetype == "video/3gpp" || file.mimetype == "video/quicktime" || file.mimetype == "video/x-ms-wmv" ) {
          cb(null, true);
        } else {
            req.fileValidationError = "Forbidden extension";
            return cb(null, false, req.fileValidationError);
        }
      }
})

const videoRouter = express.Router();

videoRouter.get('/', videoController.findAll);

videoRouter.get('/:id', videoController.findById);

videoRouter.put('/:id', videoController.update);

videoRouter.delete('/:id', videoController.delete);

videoRouter.post('/', upload.single('file'), videoController.create);

module.exports = videoRouter;