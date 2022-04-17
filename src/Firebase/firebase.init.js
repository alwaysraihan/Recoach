import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDA4PAB9FaU0LaXnCilLnAmhN08vCy8sYA",
  authDomain: "health-coatch.firebaseapp.com",
  projectId: "health-coatch",
  storageBucket: "health-coatch.appspot.com",
  messagingSenderId: "1054797985728",
  appId: "1:1054797985728:web:dd5c59db9d128431f4ba25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
