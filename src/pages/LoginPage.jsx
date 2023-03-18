import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../assets/logo.png";
import SignUpPage from "./SignUpPage";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginPage">
      <div className="loginPageBG">
        <img src={logo} className="loginLogo" alt="logo" />

        <button className="loginPageBtn" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="loginOverlay" />
      </div>

      <div className="loginPageBody">
        {signIn ? (
          <SignUpPage />
        ) : (
          <>
            <h1>Unlimated films, TV programs and more.</h1>
            <h2>Watch anywhere cancel anytime</h2>
            <h3>
              Ready to watch ? Enter your email to create or restart your
              membership
            </h3>

            <div className="loginPageInput">
              <form action="">
                {/* <input type="email" placeholder="Email Address" /> */}
                <button
                  className="loginPageGetStartedBtn"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
