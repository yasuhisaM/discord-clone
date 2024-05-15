import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArn62Ds3JZlw1JtSAAKrXfRL6pU-vr_1Y",
  authDomain: "discord-clone-cbdba.firebaseapp.com",
  projectId: "discord-clone-cbdba",
  storageBucket: "discord-clone-cbdba.appspot.com",
  messagingSenderId: "146785738747",
  appId: "1:146785738747:web:e57f71be1478500d38f55e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
