import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALA0SKAiWqcrf-pf1wbHc8avDXecpV3dA",
    authDomain: "chatgpt-thv.firebaseapp.com",
    projectId: "chatgpt-thv",
    storageBucket: "chatgpt-thv.appspot.com",
    messagingSenderId: "606782958941",
    appId: "1:606782958941:web:1243c0d3c4851acfe2ccb4"
  };

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
