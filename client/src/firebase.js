// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-57360.firebaseapp.com",
  projectId: "mern-estate-57360",
  storageBucket: "mern-estate-57360.appspot.com",
  messagingSenderId: "1078419806521",
  appId: "1:1078419806521:web:6de7f0693d437a1838f0e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);