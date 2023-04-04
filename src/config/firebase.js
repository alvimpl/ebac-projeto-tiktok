// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCXghK9GoP71jAekge_qvChox5xdlCUzMM",
  authDomain: "ebac-tiktok.firebaseapp.com",
  projectId: "ebac-tiktok",
  storageBucket: "ebac-tiktok.appspot.com",
  messagingSenderId: "208246885796",
  appId: "1:208246885796:web:5d078aa5df1f78303a8531",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbtiktok = getFirestore(app);

export default dbtiktok;
