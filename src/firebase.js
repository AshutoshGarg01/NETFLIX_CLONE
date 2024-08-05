
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, 
    getAuth,
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCZTMcZG0OZNhvth6PMaCTlbqNsS7f_Bnk",
  authDomain: "netflix-clone-d5589.firebaseapp.com",
  projectId: "netflix-clone-d5589",
  storageBucket: "netflix-clone-d5589.appspot.com",
  messagingSenderId: "342984527959",
  appId: "1:342984527959:web:262032754ec6a2d1c75312"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async(name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "user"), {
        uid : user.uid,
        name, 
        authProvider: "local",
        email,
      });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async(email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = () => {
    signOut(auth)
}

export {auth, db, login, logout, signup}