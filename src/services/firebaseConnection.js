
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC5OhIlgWu_7YnvvRiVh1BMf2Tdphtc7XU",
  authDomain: "tickets-8ff35.firebaseapp.com",
  projectId: "tickets-8ff35",
  storageBucket: "tickets-8ff35.appspot.com",
  messagingSenderId: "914909556803",
  appId: "1:914909556803:web:7efbfea0733820822564f6",
  measurementId: "G-RZ1BDVXPDF"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };