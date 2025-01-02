
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, getFirestore,collection } from "firebase/firestore";
import { toast } from "react-toastify";
import "./toastStyles.css"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };
  
  export default firebaseConfig;
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
        toast.success("Successfully signed up! Welcome!", {
            className: "responsive-toast", // Apply custom class
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '), {
            className: "responsive-toast", // Apply custom class
        });
    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Successfully logged in!", {
            className: "responsive-toast", // Apply custom class
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '), {
            className: "responsive-toast", // Apply custom class
        });
    }
};

const logout = () => {
    signOut(auth)
        .then(() => {
            toast.success("Successfully signed out!", {
                className: "responsive-toast", // Apply custom class
            });
        })
        .catch((error) => {
            console.log(error);
            toast.error("Error signing out: " + error.message, {
                className: "responsive-toast", // Apply custom class
            });
        });
};

export { auth, db, login, signup, logout };