import React, {createContext, useEffect, useState} from 'react';
import {onAuthStateChanged, signOut} from "firebase/auth";
import auth from "../Firebase/Firebase.config.js";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            console.log(user);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, []);

    const logout = () => {
        return signOut(auth);
    }

    const authInfo = {user, loading, logout}
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;