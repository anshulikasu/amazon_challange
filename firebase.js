import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDLNJVya0RQIt1aDED4fewfso_308Ms2Bw",
    authDomain: "challange-bf85f.firebaseapp.com",
    projectId: "challange-bf85f",
    storageBucket: "challange-bf85f.appspot.com",
    messagingSenderId: "391752458918",
    appId: "1:391752458918:web:8db9737c35896d59154a67",
    measurementId: "G-WGD8VVVRXG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };