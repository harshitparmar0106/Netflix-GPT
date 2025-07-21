// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC3WH6UIMg3-XkUWyMK-sDLWDDBQGhHZA",
  authDomain: "netflix-gpt-bd839.firebaseapp.com",
  projectId: "netflix-gpt-bd839",
  storageBucket: "netflix-gpt-bd839.firebasestorage.app",
  messagingSenderId: "5234071211",
  appId: "1:5234071211:web:4ed5c2765fe90b1e33c9ee",
  measurementId: "G-D6JF2BX2QN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);