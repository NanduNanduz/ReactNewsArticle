

import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkfk65uuGY2yqscxrLpe6GdNwV3YhFP1Q",
  authDomain: "newsarticle-1ab4c.firebaseapp.com",
  databaseURL: "https://newsarticle-1ab4c-default-rtdb.firebaseio.com",
  projectId: "newsarticle-1ab4c",
  storageBucket: "newsarticle-1ab4c.appspot.com",
  messagingSenderId: "819556175755",
  appId: "1:819556175755:web:99407846d9b77ee38ee98e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);