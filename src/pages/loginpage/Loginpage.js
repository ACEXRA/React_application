import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Usercontext } from "../../context/user-context";
import VisibleIcon from "../../assets/images/see.png";
import HiddenIcon from "../../assets/images/hidden.png";
import Error from "../../components/modal/Error";

const Loginpage = () => {
  const { setLoggedIn, data, loggedIn } = useContext(Usercontext);

  const [error, setError] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const history = useHistory();

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const visibleIconHandler = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    data.map((item) => {
      if (username === item.username && password === item.password) {
        setLoggedIn(true);
        setError(false);
        history.push("/home");
      } else {
        setError(true);
      }
    });
  };
  return (
    <div className="login">
      <h2>Log in</h2>
      <img
        src={passwordType === "password" ? VisibleIcon : HiddenIcon}
        onClick={visibleIconHandler}
        className="visibleIcon"
        alt=""
      />
      <form onSubmit={submitHandler} className="form">
        <input
          className="input"
          placeholder="username"
          onChange={userNameHandler}
        />
        <input
          className="input"
          type={passwordType}
          placeholder="password"
          onChange={passwordHandler}
        />
        {error && <Error message={"Username or Password is incorrect"} />}
        <button type="submit" className="custom_btn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Loginpage;
