// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmPNEX1ESSzjx0T5OXn4HZrSgAAcUN1ds",
  authDomain: "social-event-management-ed331.firebaseapp.com",
  projectId: "social-event-management-ed331",
  storageBucket: "social-event-management-ed331.appspot.com",
  messagingSenderId: "567791012055",
  appId: "1:567791012055:web:d0fff178ef052c656c4892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

export default app;