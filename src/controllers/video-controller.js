import Video from '../models/video';
import firebaseService from '../services/firebase-service';


const videoController = {};

videoController.create = (req, res) => {

    if(!req.body.title ) {
        res.status(422).send("You have missed enter title");
        return
    }
    if (!req.file || req.fileValidationError) {
        res.status(422).send("Invalid File video.");
        return
    } else {
        try {
            console.log("Start video upload");
            firebaseService.uploadFile(req.file, (fileUrl) => {
                const video = {
                    title: req.body.title,
                    description: req.body.description || '',
                    videoUrl: fileUrl,
                    type: req.file.mimetype,
                    timestamp: Date.now()
                }
                Video.create(video);

                res.status(201).send("Video uploaded.");
            });
        } catch (err) {
            console.log(err);
            res.status(500).send("Ooops!, there was one error.")
        }
    }
};

videoController.findAll = (req, res) => {
    try {
        Video.findAll()
            .then(videos => {
                res.status(200).send(videos = { videos });
            });
    } catch (err) {
        console.log(err);
        res.status(500).send("there was one error.")
    }
};

videoController.findById = (req, res) => {
    try {
        Video.findById(req.params.id)
            .then(video => {
                console.log(video)
                res.status(200).send(video);
            });
    } catch (err) {
        console.log(err);
        res.status(500).send("there was one error.");
    }

};

videoController.update = (req, res) => {
    try {
        console.log(req.body);
        const video = {
            title: req.body.title,
            description: req.body.description,
            fileUrl: fileUrl,
            updateTimestamp: Date.now()
        }
        Video.update(req.params.id, req.body.title, req.body.description)
        return res.status(200).send("Video was updated.");
    } catch (err) {
        console.log(err);
        res.status(500).send("there was one error.");
    }
};

videoController.delete = (req, res) => {
    try {
        Video.delete(req.params.id)
        return res.status(200).send("Video was deleted");
    } catch (err) {
        console.log(err);
        res.status(500).send("there was one error.");
    }

};

export default videoController;