// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-nkv7raoY69_e-LXxkdf-gLHVWVrP5z4',
  authDomain: 'registerations-9c491.firebaseapp.com',
  projectId: 'registerations-9c491',
  storageBucket: 'registerations-9c491.appspot.com',
  messagingSenderId: '810976719448',
  appId: '1:810976719448:web:15b17878d82670d08b902d',
  measurementId: 'G-QDSN0KRXMB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
