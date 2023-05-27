import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjiXoHoNudKlFapbGyrSxjLkq5P9I5ZEQ",
    authDomain: "uchat-n.firebaseapp.com",
    projectId: "uchat-n",
    storageBucket: "uchat-n.appspot.com",
    messagingSenderId: "369628962471",
    appId: "1:369628962471:web:28976caabb6b927c2e4582",
    measurementId: "G-ZV15PN3E5Z"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

if (window.location.hostname === 'localhost') {
  // connectAuthEmulator(auth, 'http://localhost:9099');
  // connectFirestoreEmulator(db, 'localhost', '8080');
}

export { db, auth };
export default firebase;