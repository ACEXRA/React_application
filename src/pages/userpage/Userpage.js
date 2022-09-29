import React, { useContext, useState } from "react";
import { Usercontext } from "../../context/user-context";
import Adduser from "../../components/modal/Adduser";
import Button from "../../components/modal/Button";

const Userpage = () => {
  const { data, setData } = useContext(Usercontext);
  const [modal, setModal] = useState(false);
  // console.log(data);

  const DeleteHandler = (item) => {
    console.log(item.id);
    const filteredData = data.filter((items) => items.id !== item.id);
    console.log(filteredData);
    setData(filteredData);
  };
  return (
    <>
      <div className="userpage">
        <table>
          <thead>
            <tr>
              <th style={{ width: "2rem", padding: "8px 8px 8px 15px" }}>Id</th>
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
                  <td style={{ width: "2rem", padding: "8px 8px 8px 15px" }}>
                    {items.id}
                  </td>
                  <td>{items.username}</td>
                  <td>{items.role}</td>
                  <td>{items.status}</td>
                  <td>
                    <Button
                      style={{ margin: "0" }}
                      name={"Delete"}
                      eventHandler={() => DeleteHandler(items)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={{ float: "right" }}>
          <Button name={"Add user"} eventHandler={() => setModal(true)} />
        </div>
      </div>
      {modal && <Adduser setModal={setModal} />}
    </>
  );
};
export default Userpage;
