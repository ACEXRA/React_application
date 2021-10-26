import React, { useContext, useState } from "react";
import { Usercontext } from "../../context/user-context";
import Adduser from "../../components/modal/Adduser";

const Userpage = () => {
  const { data } = useContext(Usercontext);
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="userpage">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Delte</th>
            </tr>
          </thead>
          <tbody>
            {data.map((items) => {
              return (
                <tr key={items.id}>
                  <td>{items.id}</td>
                  <td>{items.username}</td>
                  <td>{items.role}</td>
                  <td>{items.status}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="add_user_btn">
          <button onClick={() => setModal(true)}>Add user</button>
        </div>
      </div>
      {modal && <Adduser setModal={setModal} />}
    </>
  );
};
export default Userpage;
