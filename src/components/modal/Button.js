import React from "react";

const Button = (props) => {
  const clickHandler = (e) => {
    console.log("click");
    e();
  };
  return (
    <button onClick={() => clickHandler(props.eventHandler)}>
      {props.name}
    </button>
  );
};
export default Button;
