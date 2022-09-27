import React from "react";
import "../../assets/scss/modal.scss";

const Error = (props) => {
  return (
    <>
      <div style={props.style} className="error">
        {props.message}
      </div>
    </>
  );
};
export default Error;
