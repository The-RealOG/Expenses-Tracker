// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Iq0WBXOlDaQtMKbXK0ddl-d6D_yyowo",
  authDomain: "expense-tracker-21c71.firebaseapp.com",
  projectId: "expense-tracker-21c71",
  storageBucket: "expense-tracker-21c71.appspot.com",
  messagingSenderId: "437813560953",
  appId: "1:437813560953:web:262b7698c5a436989536a8",
  measurementId: "G-5CSBZDMF9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);