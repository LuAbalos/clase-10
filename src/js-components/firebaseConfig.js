// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTfbZisVMCBtpk2dMG45hq-8hSwTyRXgY",
  authDomain: "proudctosdehigienepersonal.firebaseapp.com",
  projectId: "proudctosdehigienepersonal",
  storageBucket: "proudctosdehigienepersonal.appspot.com",
  messagingSenderId: "357956339331",
  appId: "1:357956339331:web:5a8536e63e55dc2f723db6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;