import React, { useRef } from "react";
import "./SignUpPage.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { Navigate, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const regesiter = async (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...

        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorCode, errorMessage);
        // ..
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...

        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
        alert(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="signUpPage">
      <form action="">
        <h1>Sing Up</h1>
        <input ref={emailRef} placeholder="email" type="email" />
        <input ref={passwordRef} placeholder="password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpPageGray">New to Netfilx? </span>{" "}
          <span className="signUpPageLink" onClick={regesiter}>
            {" "}
            Sing Up Now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpPage;
