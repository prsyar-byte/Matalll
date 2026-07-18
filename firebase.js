// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// زانیاری Firebase ـەکەت لێرە دابنێ
const firebaseConfig = {
  apiKey: "API_KEY_لێرە",
  authDomain: "AUTH_DOMAIN_لێرە",
  projectId: "PROJECT_ID_لێرە",
  storageBucket: "STORAGE_BUCKET_لێرە",
  messagingSenderId: "MESSAGING_SENDER_ID_لێرە",
  appId: "APP_ID_لێرە"
};


// دەستپێکردنی Firebase
const app = initializeApp(firebaseConfig);


// بەکارهێنانی Auth و Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);