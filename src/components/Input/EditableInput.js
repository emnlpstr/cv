import React, { useContext, useEffect, useState } from "react";
import { EditableComponent } from "../style/EditableComponent.style";
import { EditingContext } from "../../context/editingContext/editingContext";

export const EditableInput = ({ id, label, value, type, date, box, title }) => {
  const [newValue, setNewValue] = useState(value);
  const { editing } = useContext(EditingContext);

  const changeHandler = (event) => {
    const currentValue = event.target.value;
    setNewValue(currentValue);
  };

  const textareaStyle = {
    fontWeight: `${title ? "700" : "400"}`,
    fontSize: `${title ? "18px" : "14px"}`,
  };

  return (
    <EditableComponent date={date ? true : false}>
      <div
        className={`inline-input ${type === "textarea" ? "textarea" : ""} ${
          date ? "date" : ""
        }
        ${box ? "box" : ""}`}
      >
        {label && <label htmlFor={id}>{label}</label>}
        {type === "textarea" ? (
          <textarea
            id={id}
            value={newValue}
            readOnly={!editing}
            onChange={(event) => changeHandler(event)}
            style={textareaStyle}
          ></textarea>
        ) : (
          <input
            id={id}
            value={newValue}
            readOnly={!editing}
            onChange={(event) => changeHandler(event)}
            type={type}
          />
        )}
      </div>
    </EditableComponent>
  );
};
