// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMX3tMKuduVc8B8DCwQEAvoUG_Q---O88",
  authDomain: "eugeniudev-b71c2.firebaseapp.com",
  projectId: "eugeniudev-b71c2",
  storageBucket: "eugeniudev-b71c2.appspot.com",
  messagingSenderId: "973227980242",
  appId: "1:973227980242:web:8f9e2b7d20068fa5fbc40b",
  measurementId: "G-7HV95MDEKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);