import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCOypJgsklryt-jq8vdY-eatC16BWALb6M",
  authDomain: "recipe-app-acca0.firebaseapp.com",
  projectId: "recipe-app-acca0",
  storageBucket: "recipe-app-acca0.appspot.com",
  messagingSenderId: "741871488654",
  appId: "1:741871488654:web:195efa31319ec723cd03df",
  measurementId: "G-PX42QFZCP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;