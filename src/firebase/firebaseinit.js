import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnTJej1CjX8mbmf2wiUdoBV15LqroNPM0",
  authDomain: "weatherapp-65529.firebaseapp.com",
  projectId: "weatherapp-65529",
  storageBucket: "weatherapp-65529.appspot.com",
  messagingSenderId: "93376362077",
  appId: "1:93376362077:web:13ebbbd7d5370dd0f9bfb4",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
