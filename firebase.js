// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiMo1BKik6ReqpDdPguJKk61mLGMu_fro",
  authDomain: "quizapp-5c9db.firebaseapp.com",
  projectId: "quizapp-5c9db",
  storageBucket: "quizapp-5c9db.firebasestorage.app",
  messagingSenderId: "862135431210",
  appId: "1:862135431210:web:4f848e6af03593bc1b5353",
  measurementId: "G-S7DJPL4SFW"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };