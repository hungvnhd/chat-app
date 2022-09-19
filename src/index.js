// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen } from "./view/index";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnQbcDL70TMo8oawi3n_Vy6shNCy5gckw",
  authDomain: "chat-app-747b9.firebaseapp.com",
  projectId: "chat-app-747b9",
  storageBucket: "chat-app-747b9.appspot.com",
  messagingSenderId: "746337461192",
  appId: "1:746337461192:web:bf257a0442576321f1d6fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// setActiveScreen("loginPage");
// setActiveScreen("registerPage");
setActiveScreen("chatPage");
// setActiveScreen("resetPasswordPage");
