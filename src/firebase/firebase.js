// Import the functions you need from the SDKs you need
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
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

// Sign Up
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Sign In
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Signout
export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));

    return unsub;
  }, []);

  return currentUser;
}
