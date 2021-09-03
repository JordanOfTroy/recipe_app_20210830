import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyAEpvnQn3QkePGqKEwzgF2DfYs6XEZM3yY",
    authDomain: "recipe-app-324622.firebaseapp.com",
    projectId: "recipe-app-324622",
    storageBucket: "recipe-app-324622.appspot.com",
    messagingSenderId: "699713671454",
    appId: "1:699713671454:web:9bd3a43c625825e953790f"
  }

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

  /**
   * Resources:
   * https://console.firebase.google.com/u/0/project/recipe-app-324622/overview
   * https://stackoverflow.com/questions/48492047/where-do-i-initialize-firebase-app-in-react-application
   * https://firebase.google.com/docs/web/setup?authuser=0
   * 
   */


