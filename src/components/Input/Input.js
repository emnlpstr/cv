import React from "react";
import { InputWrapper } from "./Input.style";

const Input = ({ id, placeholder, value }) => {
  return (
    <InputWrapper>
      <label for={id} className="sr-only">
        username
      </label>
      <input id={id} placeholder={placeholder}></input>
    </InputWrapper>
  );
};

export default Input;
