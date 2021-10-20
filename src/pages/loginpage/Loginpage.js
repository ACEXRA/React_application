import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Usercontext } from "../../context/user-context";

const Loginpage = () => {
  const { setLoggedIn } = useContext(Usercontext);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    history.push("/home");
  };
  return (
    <div className="login">
      <h2>Log in</h2>
      <form onSubmit={submitHandler} className="form">
        <input className="input" placeholder="username" />
        <input className="input" placeholder="password" />
        <br />
        <button type="submit" className="custom_btn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Loginpage;
