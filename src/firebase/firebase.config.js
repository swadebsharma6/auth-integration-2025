// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRGbaEAA8fju80PzdFl8KOibirM7k3xeg",
  authDomain: "auth-integration-25.firebaseapp.com",
  projectId: "auth-integration-25",
  storageBucket: "auth-integration-25.firebasestorage.app",
  messagingSenderId: "275290127534",
  appId: "1:275290127534:web:1564bf97e085eb67e6813f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);