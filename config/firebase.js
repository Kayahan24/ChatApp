import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBolHwSGREmTIOD0V7gvRucb8tVdPAnB-o",
  authDomain: "albarakachat.firebaseapp.com",
  projectId: "albarakachat",
  storageBucket: "albarakachat.appspot.com",
  messagingSenderId: "24616915879",
  appId: "1:24616915879:web:e3d80eafd3b6b201da1c82",
  measurementId: "G-DK34ECC8R9"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();