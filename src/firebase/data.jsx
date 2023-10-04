import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDS5l18mNKTTbhiNDhND_Eft9khyZMNuik",
    authDomain: "reactcoder-14459.firebaseapp.com",
    projectId: "reactcoder-14459",
    storageBucket: "reactcoder-14459.appspot.com",
    messagingSenderId: "1057374861206",
    appId: "1:1057374861206:web:7fd4b409cd034094494fb7"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)