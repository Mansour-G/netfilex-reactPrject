// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm_HStOFE02sEbpr_5041SSrb6AXnYb_E",
  authDomain: "netflix-clone-aa21d.firebaseapp.com",
  projectId: "netflix-clone-aa21d",
  storageBucket: "netflix-clone-aa21d.appspot.com",
  messagingSenderId: "795272208041",
  appId: "1:795272208041:web:97f86487fb124944e513b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
const db = getFirestore()


export { auth }

export default db;
