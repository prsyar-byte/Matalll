// auth.js

import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Sign Up
export function signup(email, password) {

  return createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
}


// Login
export function login(email, password) {

  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
}


// Forgot Password
export function resetPassword(email) {

  return sendPasswordResetEmail(
    auth,
    email
  );
}


// Save user data in Firestore
export async function saveUserData(uid, data){

  await setDoc(
    doc(db, "users", uid),
    data
  );

}