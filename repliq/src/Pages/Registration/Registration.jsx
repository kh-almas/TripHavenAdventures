import React, {useContext, useEffect} from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.config.js";
import {AuthContext} from "../../Provider/AuthProvider.jsx";

const Registration = () => {
  const { createUser, setCreateUser } = useContext(AuthContext);

  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start("#registration_form", {
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          defaultCountry: "BD",
          defaultNationalNumber: "1",
        },
      ],
      //set user info in database
      signInSuccessUrl: `/dashboard`,
    });

    setCreateUser(!createUser);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md px-4">
        <h1 className="text-3xl font-bold mb-4">Registration</h1>
        <div id="registration_form"></div>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
