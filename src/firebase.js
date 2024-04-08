import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYuPEbcHd_KG6fMFHi1Rpqep1SFvhnKy8",
  authDomain: "tcg-decks.firebaseapp.com",
  projectId: "tcg-decks",
  storageBucket: "tcg-decks.appspot.com",
  messagingSenderId: "518433557700",
  appId: "1:518433557700:web:464530d8c0a68c7f734d91",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
