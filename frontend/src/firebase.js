// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvkMgYd0FmGDQPLsyFdJB5JpTkNyAs8vo",
  authDomain: "edaccessible.firebaseapp.com",
  projectId: "edaccessible",
  storageBucket: "edaccessible.appspot.com",
  messagingSenderId: "350902307018",
  appId: "1:350902307018:web:3ca5159d9638ffe0b6cc33",
  measurementId: "G-RVRDCDCVX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth };