const admin = require("firebase-admin");
require('dotenv').config();

const serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pf-2023-aleja-yesid-default-rtdb.firebaseio.com/"
});

const auth = admin.auth();
const db = admin.firestore();
const realdb = admin.database();


module.exports = { auth, db, realdb };