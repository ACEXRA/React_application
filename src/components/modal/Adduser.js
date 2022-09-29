import React, { useRef, useState, useContext } from "react";
import { Usercontext } from "../../context/user-context";
import "../../assets/scss/modal.scss";
import Button from "../modal/Button";
import Error from "../modal/Error";

const Adduser = ({ setModal }) => {
  const { setData, data } = useContext(Usercontext);
  const nameRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();
  const roleRef = useRef();
  const statusRef = useRef();

  //error Handling
  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setPassowrdErr] = useState(false);
  const [confirmPassErr, setConfirmPassErr] = useState(false);
  const [passMatchErr, setPassmatchErr] = useState(false);

  //data Handling
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("unset");
  const [status, setStatus] = useState("unset");

  //onChange handling
  const usernameHandler = () => {
    if (!nameRef.current.value) {
      setUsernameErr(true);
    }
    if (nameRef.current.value) {
      setUsernameErr(false);
      setUsername(nameRef.current.value);
    }
  };
  const passwordHandler = () => {
    if (!passRef.current.value) {
      setPassowrdErr(true);
    }
    if (passRef.current.value) {
      setPassowrdErr(false);
      setPassword(passRef.current.value);
    }
  };
  const confimrPassHandler = () => {
    if (!confirmPassRef.current.value) {
      setConfirmPassErr(true);
    }
    if (confirmPassRef.current.value) {
      setConfirmPassErr(false);
    }
    if (confirmPassRef.current.value !== passRef.current.value) {
      setPassmatchErr(true);
    }
    if (confirmPassRef.current.value === passRef.current.value) {
      setPassmatchErr(false);
    }
  };
  const roleHandler = () => {
    if (roleRef.current.value) {
      setRole(roleRef.current.value);
    }
  };
  const statusHandler = () => {
    if (statusRef.current.value) {
      setStatus(statusRef.current.value);
    }
  };

  //submitting data
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !nameRef.current.value ||
      !passRef.current.value ||
      !confirmPassRef.current.value
    ) {
      if (!nameRef.current.value) {
        setUsernameErr(true);
      }
      if (!passRef.current.value) {
        setPassowrdErr(true);
      }
      if (!confirmPassRef.current.value) {
        setConfirmPassErr(true);
      }
      return;
    }
    const obj = {
      id: Math.floor(Math.random() * 100),
      username: username,
      password: password,
      role: role,
      status: status,
    };
    setData([...data, obj]);
    setModal(false);
  };
  return (
    <>
      <div onClick={() => setModal(false)} className="backdrop"></div>
      <div className="adduser">
        <h4 style={{ margin: "1rem" }}>Adduser</h4>
        <form onSubmit={submitHandler} className="form">
          <div className="form_content">
            <div className="form_label">
              <label className="label">
                Username<span style={{ color: "red" }}>*</span>
              </label>
              <label className="label">
                Password<span style={{ color: "red" }}>*</span>
              </label>
              <label className="label">
                Confirm Password<span style={{ color: "red" }}>*</span>
              </label>
              <label className="label">Role</label>
              <label className="label">Status</label>
            </div>
            <div className="form_input">
              <div>
                <input type="text" ref={nameRef} onChange={usernameHandler} />
                {usernameErr && (
                  <Error
                    style={{ margin: "0" }}
                    message={"Username is required"}
                  />
                )}
              </div>
              <div>
                <input
                  type="password"
                  ref={passRef}
                  onChange={passwordHandler}
                />
                {passwordErr && (
                  <Error
                    style={{ margin: "0" }}
                    message={"Password is required"}
                  />
                )}
              </div>
              <div>
                <input
                  type="password"
                  ref={confirmPassRef}
                  onChange={confimrPassHandler}
                />
                {confirmPassErr && (
                  <Error
                    style={{ margin: "0" }}
                    message={"Confirm password is required"}
                  />
                )}
                {passMatchErr && (
                  <Error
                    style={{ margin: "0" }}
                    message={"Password doesn't match"}
                  />
                )}
              </div>
              <select
                ref={roleRef}
                onChange={roleHandler}
                defaultValue={"unset"}
              >
                <option>Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Sub Admin">Sub Admin</option>
                <option value="Member">Member</option>
                <option value="Non-Member">Non-Member</option>
              </select>
              <select
                ref={statusRef}
                onChange={statusHandler}
                defaultValue={"unset"}
              >
                <option>Select Status</option>
                <option value="Online">Online</option>
                <option value="Away">Away</option>
              </select>
            </div>
            <div style={{ display: "flex", fontSize: "0.7rem", color: "red" }}>
              * marked are required field
            </div>
          </div>
          <div className="from_btn">
            <Button name={"Cancel"} eventHandler={() => setModal(false)} />
            <Button name={"Add User"} />
          </div>
        </form>
      </div>
    </>
  );
};
export default Adduser;
