// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXOFc8s65m54xfgPTJqT-sAe14TignxvA",
  authDomain: "instapp-89ffd.firebaseapp.com",
  projectId: "instapp-89ffd",
  storageBucket: "instapp-89ffd.appspot.com",
  messagingSenderId: "795877845680",
  appId: "1:795877845680:web:43eb20ecf2897e292ca975"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
