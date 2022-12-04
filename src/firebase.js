// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ZnGcD469leXuM8XiW7h5GrbOS7fSKj8",
  authDomain: "realtor-clone-react-cc30a.firebaseapp.com",
  projectId: "realtor-clone-react-cc30a",
  storageBucket: "realtor-clone-react-cc30a.appspot.com",
  messagingSenderId: "695586393833",
  appId: "1:695586393833:web:a9497a681754a697f4ea78",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
