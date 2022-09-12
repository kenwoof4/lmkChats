// @ts-nocheck
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCyHsOwN8_muOsOQi26_kZFo_a_zHYjU_4",
  authDomain: "chat-8c390.firebaseapp.com",
  projectId: "chat-8c390",
  storageBucket: "chat-8c390.appspot.com",
  messagingSenderId: "508641587745",
  appId: "1:508641587745:web:af1163f62f05d61087a960"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();