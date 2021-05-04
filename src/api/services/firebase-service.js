import { bucket } from '../config/firebase';
const { v4: uuidv4 } = require('uuid');

const firebaseService = {};

firebaseService.uploadFile = async (file, saveVideo) => {

    const filename = `${Date.now()}_${file.originalname}`;
    const blob = bucket.file(filename);
    const uuid = uuidv4();
    console.log("Start video upload",filename);
    const blobWriter = blob.createWriteStream({
        metadata: {
            contentType: file.mimetype,
            metadata: {
                firebaseStorageDownloadTokens: uuid
            }
        }
    });

    blobWriter.on('error', (err) => {
        console.log(err);
        throw err;
    });
    var fileUrl;
    blobWriter.on('finish', () => {
        fileUrl = "https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(filename) + "?alt=media&token=" + uuid;
        saveVideo(fileUrl);
    });

    blobWriter.end(file.buffer);
}

export default firebaseService;