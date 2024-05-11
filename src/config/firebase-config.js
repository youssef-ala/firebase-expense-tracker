// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHwsFm7nT0KiVMuAwNJHv6OZKqR-QP8E4",
  authDomain: "expense-tracker-5291f.firebaseapp.com",
  projectId: "expense-tracker-5291f",
  storageBucket: "expense-tracker-5291f.appspot.com",
  messagingSenderId: "241892325887",
  appId: "1:241892325887:web:708243000250c504540fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

