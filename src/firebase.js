import firebase from "firebase/app";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
//   storageBucket: "licenseproject-c2773.appspot.com",
// };

// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();
// export default storage;


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHMyfKHuGDKZIwDgKhl8gQvNCt95Z4uMk",
  authDomain: "streamvideo-93835.firebaseapp.com",
  projectId: "streamvideo-93835",
  storageBucket: "licenseproject-c2773.appspot.com",
  messagingSenderId: "1088603857476",
  appId: "1:1088603857476:web:c6b04c0fb51f7e0c46d211",
  measurementId: "G-L26BWQ1LMN"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;