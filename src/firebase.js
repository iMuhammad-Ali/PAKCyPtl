import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB5pzwjigoza5a28nCRclUBNyakgp0wwCo",
    authDomain: "pakcyptl.firebaseapp.com",
    projectId: "pakcyptl",
    storageBucket: "pakcyptl.appspot.com",
    messagingSenderId: "1021359460779",
    appId: "1:1021359460779:web:725dbcb369448b3e5942ee"
};

initializeApp(firebaseConfig);
export const auth = getAuth();