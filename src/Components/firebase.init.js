// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD8SP4ghct1WrUIKP2qSWBTtWzvj--mbQ",
  authDomain: "fir-auth-conceptual-86f50.firebaseapp.com",
  projectId: "fir-auth-conceptual-86f50",
  storageBucket: "fir-auth-conceptual-86f50.appspot.com",
  messagingSenderId: "78654022925",
  appId: "1:78654022925:web:407ae8662f37c2fa65bc44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);