import React, { useContext, useState, useEffect } from "react";
import { Usercontext } from "../../context/user-context";
import UserModal from "../../components/modal/UserModal";
import Adduser from "../../components/modal/Adduser";
import Button from "../../components/modal/Button";

const Userpage = () => {
  const { data, setData, userLogged } = useContext(Usercontext);
  const [studentData, setStudentData] = useState([]);
  const [modal, setModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (userLogged.role === "Master") {
      const studentData = data.filter((items) => items.role !== "Master");
      setStudentData(studentData);
    } else if (userLogged.role === "Teacher") {
      const studentData = data.filter((items) => items.role === "Student");
      setStudentData(studentData);
    }
  }, [data, userLogged]);

  const EditHandler = (item) => {
    setUserModal(true);
    setEdit(true);
    setEditData(item);
  };
  const DeleteHandler = (item) => {
    const filteredData = data.filter((items) => items.id !== item.id);
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
              <th>Dept</th>
              <th>Place</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((items) => {
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
                      name={"Edit"}
                      eventHandler={() => EditHandler(items)}
                    />
                  </td>
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
      {modal && <Adduser name={"Add User"} setModal={setModal} />}
      {userModal && (
        <UserModal
          name={edit ? "Edit User" : "Add User"}
          setUserModal={setUserModal}
          editData={editData}
        />
      )}
    </>
  );
};
export default Userpage;
