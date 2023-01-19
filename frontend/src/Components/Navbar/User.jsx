import React from "react";
import { Link } from "react-router-dom";

import "./user.css";

const User = () => {
  return (
    <div className="nav__user__lg">
      <div className="nav_user_option_">
        <Link>
          <button className="nav__user__rbutton">Register</button>
        </Link>
        <Link>
          <button className="nav__user__lbutton">Login</button>
        </Link>
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
