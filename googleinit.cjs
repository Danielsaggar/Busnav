require('dotenv').config();
const serviceAccount = require("./key.json");
// Import the functions you need from the SDKs you need
const { initializeApp }= require("firebase/app") ;
const { getAuth } = require ("firebase/auth");
const { getFirestore }  = require ("firebase/firestore");
const { getDatabase }  = require ("firebase/database");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries Faq

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {  
  apiKey: "AIzaSyCQKXbJN9BSYqtf1Fu9gZxHDNPkHP_857k",
  authDomain: "pf-2023-aleja-yesid.firebaseapp.com",
  databaseURL: "https://pf-2023-aleja-yesid-default-rtdb.firebaseio.com/",
  projectId: "pf-2023-aleja-yesid",
  storageBucket: "pf-2023-aleja-yesid.appspot.com",
  messagingSenderId: "539143780591",
  appId: "1:539143780591:web:26d172e6445cbc5974431a",
  measurementId: "G-3WBM5BYKQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const realdb = getDatabase(app);

module.exports = { auth, db, realdb };