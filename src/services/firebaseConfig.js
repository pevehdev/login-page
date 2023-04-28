import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDlxel-xyJViKYQtlQbRcUfzZ40eVAbdRo",
  authDomain: "react-auth-53cf7.firebaseapp.com",
  projectId: "react-auth-53cf7",
  storageBucket: "react-auth-53cf7.appspot.com",
  messagingSenderId: "348386400702",
  appId: "1:348386400702:web:4cfc30ec533512a34c81ef"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);