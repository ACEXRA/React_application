import React from "react";
import "../../assets/scss/modal.scss";

const Error = (props) => {
  return (
    <>
      <div className="error">{props.message}</div>
    </>
  );
};
export default Error;
