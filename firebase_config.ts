/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiHBTojN85TLmBtw1fvInqphHWDJDd6S0",
  authDomain: "cv-page-f3f29.firebaseapp.com",
  projectId: "cv-page-f3f29",
  storageBucket: "cv-page-f3f29.appspot.com",
  messagingSenderId: "574633847334",
  appId: "1:574633847334:web:57a12926c8659ea2a414e7",
  measurementId: "G-8D888QCT86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);