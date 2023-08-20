import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
} from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATHtlFsnl1KzXcNg-YJoSkUYIaGmucjlQ",
  authDomain: "learnlink-87932.firebaseapp.com",
  projectId: "learnlink-87932",
  storageBucket: "learnlink-87932.appspot.com",
  messagingSenderId: "700358812860",
  appId: "1:700358812860:web:53e83de735094d05a59cb9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);

export { auth };
export const googleprovider = new GoogleAuthProvider();
export const storage: FirebaseStorage = getStorage(app);
export const firestore: Firestore = getFirestore(app);
