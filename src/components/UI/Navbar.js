import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Usercontext } from "../../context/user-context";

const Navbar = () => {
  const { setLoggedIn } = useContext(Usercontext);

  const loginHandler = () => {
    setLoggedIn(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h4>Rasheed</h4>
      </div>
      <div className="navbar_items">
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/user">User</NavLink>
          </li>
          <li>
            <NavLink to="/networks">Networks</NavLink>
          </li>
          <li onClick={loginHandler}>Logout</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
