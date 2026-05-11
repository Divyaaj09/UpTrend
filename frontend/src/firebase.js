// src/firebase.js

import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
} from "firebase/firestore";

import {
  getAnalytics,
} from "firebase/analytics";

// Firebase Config

const firebaseConfig = {

  apiKey:
    "AIzaSyCfelljtCHGV-BNNdijNx7kdN_0XtkqhrA",

  authDomain:
    "uptrend-9359d.firebaseapp.com",

  projectId:
    "uptrend-9359d",

  storageBucket:
    "uptrend-9359d.firebasestorage.app",

  messagingSenderId:
    "856563919315",

  appId:
    "1:856563919315:web:36ead25212fba7b1d46726",

  measurementId:
    "G-9FMQJZDFZ0",
};

// Initialize Firebase

const app =
  initializeApp(firebaseConfig);

// Analytics

const analytics =
  getAnalytics(app);

// Auth

export const auth =
  getAuth(app);

export const googleProvider =
  new GoogleAuthProvider();

// Firestore

export const db =
  getFirestore(app);

export default app;