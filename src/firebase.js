import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDfIPDty7ebDIeqadirAx4uw1qzQOVZNdY",
  authDomain: "forreact-828fb.firebaseapp.com",
  projectId: "forreact-828fb",
  storageBucket: "forreact-828fb.appspot.com",
  messagingSenderId: "951080984192",
  appId:"1:951080984192:web:3a408e7f47295746d41065"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
