// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPZD9_F4-K0UK67tDgLfDibjlhU57jFz0",
    authDomain: "router-firebase-integrationn.firebaseapp.com",
    projectId: "router-firebase-integrationn",
    storageBucket: "router-firebase-integrationn.appspot.com",
    messagingSenderId: "374327473183",
    appId: "1:374327473183:web:bc489e92dbb858593e512a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
