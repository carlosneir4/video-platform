const admin = require('firebase-admin');

const serviceAccount = require("./video-platform-72110-firebase-adminsdk-55xap-f62ca489d1.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://video-platform-72110-default-rtdb.firebaseio.com",
    storageBucket: "gs://video-platform-72110.appspot.com"
});

const database = admin.database();
const bucket = admin.storage().bucket();

export {
    database,
    bucket
};