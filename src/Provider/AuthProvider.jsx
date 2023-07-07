import React, {createContext, useEffect, useState} from 'react';
import {onAuthStateChanged} from "firebase/auth";
import auth from "../Firebase/Firebase.config.js";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            console.log(user);
        })
        return () => {
            return unsubscribe();
        }
    }, []);
    const authInfo = {user}
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;