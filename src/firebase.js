// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_JNT6y14yWWNZUi6TPFCGwEfRrnsTi-I",
  authDomain: "netflix-clone-92bcb.firebaseapp.com",
  projectId: "netflix-clone-92bcb",
  storageBucket: "netflix-clone-92bcb.appspot.com",
  messagingSenderId: "189318171109",
  appId: "1:189318171109:web:8eed367a2f2b5149eec70c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
