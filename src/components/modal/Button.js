import React from "react";
import "../../assets/scss/modal.scss";

const Button = (props) => {
  const clickHandler = (e) => {
    if (e) {
      e();
    } else {
      return null;
    }
  };
  return (
    <button
      style={props.style}
      className="button"
      onClick={() => clickHandler(props.eventHandler)}
    >
      {props.name}
    </button>
  );
};
export default Button;
