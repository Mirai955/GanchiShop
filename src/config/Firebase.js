// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-bT_IQuZqzFcQnlVdqm9Xq777sSTTEcY",
  authDomain: "login-firebase-66263.firebaseapp.com",
  databaseURL: "https://login-firebase-66263-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-firebase-66263",
  storageBucket: "login-firebase-66263.appspot.com",
  messagingSenderId: "664441722164",
  appId: "1:664441722164:web:f64f5691849188b09a8161",
  measurementId: "G-CDDE9TT89W",
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
