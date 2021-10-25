import React from "react";
import "../../assets/scss/modal.scss";

const Adduser = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="backdrop"></div>
      <div className="adduser">
        <h4>Adduser</h4>
        <form onSubmit={submitHandler}>
          <div className="form_content">
            <label>Username :&nbsp;</label>
            <input />
          </div>
          <div className="form_content">
            <label>Password : &nbsp;</label>
            <input />
          </div>
          <div className="form_content">
            <label>Confirm Password : &nbsp;</label>
            <input />
          </div>
          <div className="form_content">
            <label>Role :&nbsp;</label>
            <select>
              <option value="Admin">Admin</option>
              <option value="user">user</option>
            </select>
          </div>
          <div className="form_content">
            <label>Status :&nbsp;</label>
            <select>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button className="add_btn">Add User</button>
        </form>
      </div>
    </>
  );
};
export default Adduser;
