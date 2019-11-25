import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBhhELYW0Of9re7nMiOR8K8AnqcfXY9GQI",
  authDomain: "final-project-epam.firebaseapp.com",
  databaseURL: "https://final-project-epam.firebaseio.com",
  projectId: "final-project-epam",
  storageBucket: "final-project-epam.appspot.com",
  messagingSenderId: "264696846857",
  appId: "1:264696846857:web:a9e8bd435c2a091cf7b6d8",
  measurementId: "G-BJP1Q1JPML"
};

try {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  console.log("Firebase Initialized");
} catch (err) {
  console.log("Error Initializing Firebase");
}
export default firebase;
