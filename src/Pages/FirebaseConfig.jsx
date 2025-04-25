// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnjT9iM7BdnnpXgU2TQ-cIx9oCPS3y054",
  authDomain: "login-76cb1.firebaseapp.com",
  projectId: "login-76cb1",
  storageBucket: "login-76cb1.firebasestorage.app",
  messagingSenderId: "178446310312",
  appId: "1:178446310312:web:00d23ca8006b154dbc5b9d",
  measurementId: "G-E496HSH1M5"
};

// Initialize Firebase
   export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);