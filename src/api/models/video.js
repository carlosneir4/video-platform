
import { database } from '../config/firebase';


const Video = {};

Video.create = (video) => {
    console.log("Added video", video);
    database.ref('videos').push({
        title: video.title,
        description: video.description,
        url: video.videoUrl,
        type: video.type,
        createTimestamp: video.timestamp
    });
}

Video.findAll = () => {
    console.log("return list videos");
    return database.ref('videos').once('value', (snapshot) => {
        snapshot.val();
    });
}

Video.findById = (id) => {
    console.log("return video", id);
    return database.ref('videos/' + id).once('value', (snapshot) => {
        snapshot.val();
    });
}

Video.update = (id, title, description) => {
    console.log("edit video", id);
    database.ref('videos/' + id).update({
        title: title,
        description: description,
        updateTimestamp: video.updateTimestamp
    })
}

Video.delete = (id) => {
    console.log("delete video", id);
    return database.ref('videos/' + id).remove();
}

export default Video;