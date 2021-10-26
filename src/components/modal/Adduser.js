import React, { useRef, useState, useContext } from "react";
import "../../assets/scss/modal.scss";
import { Usercontext } from "../../context/user-context";

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
  const [roleErr, setRoleErr] = useState(false);
  const [statusErr, setStatusErr] = useState(false);

  //data Handling
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

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
  };
  const roleHandler = () => {
    if (!roleRef.current.value) {
      setRoleErr(true);
    }
    if (roleRef.current.value) {
      setRoleErr(false);
      setRole(roleRef.current.value);
    }
  };
  const statusHandler = () => {
    if (!statusRef.current.value) {
      setStatusErr(true);
    }
    if (statusRef.current.value) {
      setStatusErr(false);
      setStatus(statusRef.current.value);
    }
  };

  //submitting data
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(statusRef.current.value);
    if (
      !nameRef.current.value ||
      !passRef.current.value ||
      !confirmPassRef.current.value ||
      !roleRef.current.value ||
      !statusRef.current.value
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
      if (!statusRef.current.value) {
        setStatusErr(true);
      }
      if (!roleRef.current.value) {
        setRoleErr(true);
      }
      return;
    }
    if (usernameErr || passwordErr || confirmPassErr || roleErr || statusErr) {
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
        <h4>Adduser</h4>
        <form onSubmit={submitHandler}>
          <div className="form_content">
            <label>Username :&nbsp;</label>
            <input type="string" ref={nameRef} onChange={usernameHandler} />
            {usernameErr && (
              <p className="error_message">Username is Required</p>
            )}
          </div>
          <div className="form_content">
            <label>Password : &nbsp;</label>
            <input type="password" ref={passRef} onChange={passwordHandler} />
            {passwordErr && (
              <p className="error_message">Password is Required</p>
            )}
          </div>
          <div className="form_content">
            <label>Confirm Password : &nbsp;</label>
            <input
              type="password"
              ref={confirmPassRef}
              onChange={confimrPassHandler}
            />
            {confirmPassErr && (
              <p className="error_message">Confirm Password is Required</p>
            )}
          </div>
          <div className="form_content">
            <label>Role :&nbsp;</label>
            <select ref={roleRef} onChange={roleHandler}>
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="user">user</option>
            </select>
            {roleErr && <p className="error_message">Role is Required</p>}
          </div>
          <div className="form_content">
            <label>Status :&nbsp;</label>
            <select ref={statusRef} onChange={statusHandler}>
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {statusErr && <p className="error_message">Status is Required</p>}
          </div>
          <button
            style={{ margin: "0 1rem" }}
            className="modal_btn"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
          <button className="modal_btn">Add User</button>
        </form>
      </div>
    </>
  );
};
export default Adduser;
