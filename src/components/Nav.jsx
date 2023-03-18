import React, { useState } from "react";
import "./Nav.css";
import logo from "../assets/logo.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, handelShow] = useState(false);
  const navigate = useNavigate();

  const transitionNav = () => {
    if (window.scrollY > 100) {
      handelShow(true);
    } else {
      handelShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return (
    <div className={`nav ${show && "navBlack"}`}>
      <div className="NavContent">
        <img
          src={logo}
          className="navLogo"
          alt=""
          onClick={() => navigate("/")}
        />

        <img
          onClick={() => navigate("/profile")}
          className="navAvatar"
          src="https://i.pinimg.com/564x/2c/da/7d/2cda7d2586c089f72dba36b2c335ad22.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
