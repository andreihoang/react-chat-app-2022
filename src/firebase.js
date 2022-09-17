// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNG41w4bDuZtwaSJySo-PKvaC_d6uYIXI",
  authDomain: "chat-e81af.firebaseapp.com",
  projectId: "chat-e81af",
  storageBucket: "chat-e81af.appspot.com",
  messagingSenderId: "982613780674",
  appId: "1:982613780674:web:4eaf1c891a81714e04f35b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
