import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOMO2xAUxcSTpl2bgvFKDhj2Mnm8EMHLk",
  authDomain: "matcher-f3207.firebaseapp.com",
  projectId: "matcher-f3207",
  storageBucket: "matcher-f3207.appspot.com",
  messagingSenderId: "79758756564",
  appId: "1:79758756564:web:1b002822163b57d72ec941"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
