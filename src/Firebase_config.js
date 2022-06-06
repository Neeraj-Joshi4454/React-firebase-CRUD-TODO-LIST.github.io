
import { initializeApp } from "firebase/app";
import { getFirestore } from  'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyClTusKdFmJDDlQnJN6z_eousNqCSHXnsU",
  authDomain: "firestorecrud-f65e7.firebaseapp.com",
  projectId: "firestorecrud-f65e7",
  storageBucket: "firestorecrud-f65e7.appspot.com",
  messagingSenderId: "113432047824",
  appId: "1:113432047824:web:6a852493000115a3ceaed5",
  measurementId: "G-F295KKDEJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);