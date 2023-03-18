import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../components/Nav";
import "./Profile.css";

const ProfilPage = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profilePage">
      <Nav />
      <div className="profilePageBody">
        <h1>Edit Profile</h1>
        <div className="profilePageInfo">
          <img
            // onClick={() => navigate("/profile")}
            className="profileAvatar"
            src="https://i.pinimg.com/564x/2c/da/7d/2cda7d2586c089f72dba36b2c335ad22.jpg"
            alt=""
          />
          <div className="profilePageDetailes">
            <h2>{user.email}</h2>
            <div className="profilePagePlans">
              <h3>Plans</h3>
              <button className="signOut" onClick={() => auth.signOut()}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
