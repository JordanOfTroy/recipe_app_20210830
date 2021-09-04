import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_ID,
} = process.env;

export const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_ID,
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

/**
 * Resources:
 * https://console.firebase.google.com/u/0/project/recipe-app-324622/overview
 * https://stackoverflow.com/questions/48492047/where-do-i-initialize-firebase-app-in-react-application
 * https://firebase.google.com/docs/web/setup?authuser=0
 *
 */
