import React from "react";
import { InputWrapper } from "./Input.style";

export const Textarea = ({ id, placeholder, value, disabled }) => {
  return (
    <InputWrapper>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      ></textarea>
    </InputWrapper>
  );
};
