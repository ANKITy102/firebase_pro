// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID
  apiKey:"AIzaSyCO7dt54EnzLcK0e-oJXVFPrhNapBMCfIg",
  authDomain:"fir-pro-ff1e6.firebaseapp.com",
  projectId:"fir-pro-ff1e6",
  storageBucket:"fir-pro-ff1e6.appspot.com",
  messagingSenderId:"585517313208",
  appId:"1:585517313208:web:6d8087afc1dd608153184d"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig,
  {
    experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line

  });
export const db = getFirestore(app);

