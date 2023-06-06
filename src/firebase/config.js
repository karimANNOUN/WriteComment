
import { initializeApp } from "firebase/app";
import {collection, getFirestore } from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCjTS8alyqkAewasTstISlsYNGjetQOjPk",
  authDomain:"writenode-3f7bf.firebaseapp.com" ,
  projectId:"writenode-3f7bf" ,
  storageBucket:"writenode-3f7bf.appspot.com" ,
  messagingSenderId:"245605113395" ,
  appId: "1:245605113395:web:253e3951d6940778b74d46"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth= getAuth();
export const provider = new GoogleAuthProvider();

export const colRef=collection(db,"post");



