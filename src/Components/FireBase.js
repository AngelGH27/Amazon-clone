// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"

import {initializeApp} from 'firebase/app'
import { getFirestore} from "firebase/firestore/lite";

import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB5fDhM_sy7r34vK-IZBIWw03wWFjJWd9o",
    authDomain: "clone-60e43.firebaseapp.com",
    projectId: "clone-60e43",
    storageBucket: "clone-60e43.appspot.com",
    messagingSenderId: "1044458567063",
    appId: "1:1044458567063:web:b569ae570b35bd0d52c0d2",
    measurementId: "G-F2YMXSKY81"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth();
  
  export { db, auth };