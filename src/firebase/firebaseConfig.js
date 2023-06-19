// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2X3FZ30j2Ul9oSEb4V0SOIQzErbUHRUE",
  authDomain: "woven-diorama-368304.firebaseapp.com",
  projectId: "woven-diorama-368304",
  storageBucket: "woven-diorama-368304.appspot.com",
  messagingSenderId: "386005766621",
  appId: "1:386005766621:web:90f88e45ea425ff199e634",
  measurementId: "G-FMTG0QS7BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
//const analytics = getAnalytics(app);