import { getAuth, onAuthStateChanged } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDymWe0yI1hwyhKP-orPzxiZE76mkEpNyw",
  authDomain: "fir-bysara.firebaseapp.com",
  projectId: "fir-bysara",
  storageBucket: "fir-bysara.appspot.com",
  messagingSenderId: "784253814976",
  appId: "1:784253814976:web:519f7ecefbdb424d700525",
  measurementId: "G-RSTM8EHGV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log('User logged in!');
    // ...
  } else {
    // User is signed out
    console.log('No user logged in!');
  }
});