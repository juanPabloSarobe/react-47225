// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYuAu245c0s2i7yAVtuSvB2aEFnWJhE50",
  authDomain: "liquidstore-667c3.firebaseapp.com",
  projectId: "liquidstore-667c3",
  storageBucket: "liquidstore-667c3.appspot.com",
  messagingSenderId: "326339426672",
  appId: "1:326339426672:web:d3ab74f5337ebbd97037b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
