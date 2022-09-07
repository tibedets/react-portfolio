
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA66xuGhXT94ARyljHshyU-WCOeV_ZiSXQ",
  authDomain: "react-portfolio-dashboar-eb63a.firebaseapp.com",
  projectId: "react-portfolio-dashboar-eb63a",
  storageBucket: "react-portfolio-dashboar-eb63a.appspot.com",
  messagingSenderId: "112164429367",
  appId: "1:112164429367:web:fcdf1554b87b34606e29b2",
  measurementId: "G-MB0GQL6PP6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);