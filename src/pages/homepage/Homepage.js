import React, { useEffect, useState } from "react";
import ReactImg from "../../assets/images/react.png";
import { HashLoader } from "react-spinners";

const Homepage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("work");
    }, 3000);
  }, []);
  console.log(loading);
  return (
    <>
      {loading ? (
        <HashLoader loading={loading} size={50} color="#ffffff" />
      ) : (
        <div className="homepage">
          <div className="home_logo">
            <img src={ReactImg} alt="React" />
          </div>
          <div className="home_content">
            <h2>This is a React Single-Page application</h2>
            <p style={{ margin: "1rem 0" }}>
              This web-application involves routing and basics of react
              funtionality along with authentication.
            </p>
            <p className="creds">
              Master key
              <br />
              Username: <span>Rasheed</span>
              <br />
              Password : <span>0000</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default Homepage;
