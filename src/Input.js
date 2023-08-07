import React from "react";

const Input = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input type={props.type} value={props.value} onChange={props.onChange}></input>
    </>
  );
};

export default Input;
