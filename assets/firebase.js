
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDx9fB5OFk23fNCvTBu6XIfqlNuqfKbdp0",
  authDomain: "rcplcso.firebaseapp.com",
  projectId: "rcplcso",
  storageBucket: "rcplcso.firebasestorage.app",
  messagingSenderId: "515368672745",
  appId: "1:515368672745:web:83afb963806a68a008bf78",
  measurementId: "G-BLDNTZLFRS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
