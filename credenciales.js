import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1CrQ-ho1cjQ6zLA3v73Dwx4LSglEBvh0",
  authDomain: "pruebafirebase-e4e3d.firebaseapp.com",
  projectId: "pruebafirebase-e4e3d",
  storageBucket: "pruebafirebase-e4e3d.firebasestorage.app",
  messagingSenderId: "224490070010",
  appId: "1:224490070010:web:5df8a3b817977c33ea4e43"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase); // Agrega Firestore

export  {appFirebase, db};