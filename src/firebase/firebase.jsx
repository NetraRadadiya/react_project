// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDwHPCJy6TM0bsPFCkcFvvBkVT-cdGRJiM",
  authDomain: "react-project-2306f.firebaseapp.com",
  projectId: "react-project-2306f",
  storageBucket: "react-project-2306f.appspot.com",
  messagingSenderId: "301776774590",
  appId: "1:301776774590:web:a211d2c8351351a69245ef",
  measurementId: "G-SFFR9CW26S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();