// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5wqTdUfmFmWqRj1z66fCokJDQpwrrGSk",
  authDomain: "assignment-9-18e10.firebaseapp.com",
  projectId: "assignment-9-18e10",
  storageBucket: "assignment-9-18e10.appspot.com",
  messagingSenderId: "197891325149",
  appId: "1:197891325149:web:b7a30654f4f54a948d2f34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);