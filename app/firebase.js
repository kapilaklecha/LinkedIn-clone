import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbl26C6LOJtu-j9MyQUijX-fSPKI3aZY8",
  authDomain: "clone-3c00b.firebaseapp.com",
  projectId: "clone-3c00b",
  storageBucket: "clone-3c00b.appspot.com",
  messagingSenderId: "966526465208",
  appId: "1:966526465208:web:cc6e00f1c7bc38c880b04d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
