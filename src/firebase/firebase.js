// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO7dt54EnzLcK0e-oJXVFPrhNapBMCfIg",
  authDomain: "fir-pro-ff1e6.firebaseapp.com",
  projectId: "fir-pro-ff1e6",
  storageBucket: "fir-pro-ff1e6.appspot.com",
  messagingSenderId: "585517313208",
  appId: "1:585517313208:web:6d8087afc1dd608153184d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

