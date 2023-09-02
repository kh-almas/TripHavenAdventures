import React, {createContext, useEffect, useState} from 'react';
import {onAuthStateChanged, signOut} from "firebase/auth";
import auth from "../Firebase/Firebase.config.js";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [createUser, setCreateUser] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            console.log(user)
            if(user)
            {
                const info = {phoneNumber : user.phoneNumber}
                fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(info),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                    })
                    .catch(e => {

                    })
            }
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [createUser]);

    const logout = () => {
        return signOut(auth);
    }

    const authInfo = {user, loading, logout, createUser, setCreateUser}
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;