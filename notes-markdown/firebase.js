
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBnmdM8zKKVaX8E2HGPS9EGBwh_nK6nVHY",
  authDomain: "react-notes-md.firebaseapp.com",
  projectId: "react-notes-md",
  storageBucket: "react-notes-md.appspot.com",
  messagingSenderId: "218021662866",
  appId: "1:218021662866:web:b3e645c22ff66e9337d64b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const notesCollection = collection(db, "notes");