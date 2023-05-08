import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // gogle login
    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    // github login
    const githubLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    // email password Sing up
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email password login
    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // email Verifiy
    const emailVerifiy = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }
    // user updated
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }
    // logout
    const lotOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        emailVerifiy,
        createUser, googleLogin,
        singIn, updateUserProfile, lotOut,
        loading, user, githubLogin, setLoading
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;