import React, { useState } from "react";
import { SelectStyle } from "./SelectStyle";

export const Select = ({ id, label, value, options }) => {
  const [newValue, setValue] = useState(value);

  return (
    <SelectStyle>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={newValue}>
        {options.map((option) => {
          return (
            <option value={option} onClick={() => setValue(option)}>
              {option}
            </option>
          );
        })}
      </select>
    </SelectStyle>
  );
};
