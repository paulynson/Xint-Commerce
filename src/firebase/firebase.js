// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTVLB03xTFS5SzjfbWvM2fU1AEGOXfPAw",
  authDomain: "xint-commerce.firebaseapp.com",
  projectId: "xint-commerce",
  storageBucket: "xint-commerce.appspot.com",
  messagingSenderId: "102438584373",
  appId: "1:102438584373:web:e5e029a84c66903c96317c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
