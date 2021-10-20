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
    <form onSubmit={submitHandler}>
      <label>Username</label>
      <input />
      <label>Password</label>
      <input />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Loginpage;
