import React, { useContext, useEffect, useState } from "react";
import { Usercontext } from "../../context/user-context";
// import { subjectData } from "../../misc/DummyData";
import { eleven, twelve, elevenNo, twelveNo } from "../../misc/Constants";
import { HashLoader } from "react-spinners";

const Markpage = () => {
  const { userLogged } = useContext(Usercontext);
  const [subject, setSubject] = useState([]);
  const [classroom, setClassroom] = useState(0);
  const [loading, setLoading] = useState(false);
  // const [result, setResult] = useState("Fail");
  // const [mark, setMark] = useState([]);
  var count = 0;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("work");
    }, 3000);
  }, []);
  useEffect(() => {
    if (userLogged.class === 11) {
      setSubject(eleven);
      setClassroom(elevenNo);
    } else if (userLogged.class === 12) {
      setSubject(twelve);
      setClassroom(twelveNo);
    } else {
      console.log("Error exception throw ");
    }
  });

  return (
    <>
      {loading ? (
        <HashLoader loading={loading} size={50} color="#ffffff" />
      ) : (
        <div className="markpage">
          <table>
            <thead>
              <tr>
                <th>CLASS</th>
                <th>SUBJECT</th>
                <th>MARKS</th>
                <th>RESULT</th>
              </tr>
            </thead>
            <tbody>
              {subject.map((items) => {
                var tempMark = userLogged.mark[count++];
                return (
                  <tr>
                    <td>{classroom}</td>
                    <td>{items}</td>
                    <td>{tempMark}</td>
                    <td>{tempMark > 40 ? "Pass" : "Fail"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Markpage;
