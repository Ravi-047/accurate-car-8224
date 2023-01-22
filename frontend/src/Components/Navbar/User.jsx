import React from "react";
import { Link } from "react-router-dom";

import "./user.css";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigateTo = useNavigate();

  const logoutUser = () => {
    localStorage.clear();
    navigateTo("/");
  };

  return (
    <div className="nav__user__lg">
      <div className="nav_user_option_">
        {localStorage.getItem("email") ? (
          `Welcome ${localStorage.getItem("email")}`
        ) : (
          <Link to={"/signup"}>
            <button className="nav__user__rbutton">Register</button>
          </Link>
        )}
        {localStorage.getItem("token") ? (
          <button onClick={logoutUser} className="nav__user__lbutton">
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            {" "}
            <button className="nav__user__lbutton">Login</button>
          </Link>
        )}

        <Link>
          <p>Track Order</p>
        </Link>
        <Link>
          <p>Get Help</p>
        </Link>
      </div>
    </div>
  );
};

export default User;
