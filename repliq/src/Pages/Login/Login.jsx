import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.config.js";
import {AuthContext} from "../../Provider/AuthProvider.jsx";

const Login = () => {
  const { createUser, setCreateUser } = useContext(AuthContext);
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start("#phone_auth", {
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: "BD",
          defaultNationalNumber: "01",
        },
      ],


      signInSuccessUrl: `/dashboard`,
    });
    setCreateUser(!createUser);
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full sm:w-96 px-4">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <div id="phone_auth"></div>
        <p className="mt-4 text-sm text-gray-600">
          Don't have any account?{" "}
          <Link
            to="/registration"
            className="text-blue-500 hover:text-blue-700"
          >
            Registration here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
