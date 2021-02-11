import firebase from "firebase/app";
import "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIdeQscMPK_eYbsb_nbf_QVf5beKW3ZIM",
  authDomain: "halloffame-630ca.firebaseapp.com",
  projectId: "halloffame-630ca",
  storageBucket: "halloffame-630ca.appspot.com",
  messagingSenderId: "410265511053",
  appId: "1:410265511053:web:07fb8c235d92afbd9d6ec4"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
export default storage