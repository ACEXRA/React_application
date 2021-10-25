import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Usercontext } from "../../context/user-context";

const Navbar = () => {
  const { setLoggedIn, loggedIn } = useContext(Usercontext);

  const loginHandler = () => {
    setLoggedIn(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h4>
          <span>R</span>asheed
        </h4>
      </div>
      {loggedIn && (
        <div className="navbar_items">
          <ul>
            <li>
              <NavLink to="/home" activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/user" activeClassName="selected">
                User
              </NavLink>
            </li>
            <li onClick={loginHandler} className="logout_btn">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Navbar;
