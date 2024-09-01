// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d6288.firebaseapp.com",
  projectId: "mern-blog-d6288",
  storageBucket: "mern-blog-d6288.appspot.com",
  messagingSenderId: "1091646944069",
  appId: "1:1091646944069:web:b701ff02243550a1cb842c",
  measurementId: "G-ZLFLLV4BCM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);