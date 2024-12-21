// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



const firebaseConfig = {

  apiKey: "AIzaSyAPN2LA7FRkTLq5aEzqulHQQHZrQB_rpws",
  authDomain: "will-d1.firebaseapp.com",
  projectId: "will-d1",
  storageBucket: "will-d1.firebasestorage.app",
  messagingSenderId: "959971978425",
  appId: "1:959971978425:web:35e5f636d554ce3657ff68",

};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);