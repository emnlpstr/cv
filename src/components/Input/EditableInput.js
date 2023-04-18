import React, { useContext, useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { EditableComponent } from "../style/EditableComponent.style";
import { EditingContext } from "../../context/editingContext/editingContext";

export const EditableInput = ({
  id,
  label,
  value,
  type,
  date,
  box,
  title,
  whiteText,
}) => {
  const [newValue, setNewValue] = useState(value);
  const { editing } = useContext(EditingContext);
  const [aboutIfoStyle, setAboutInfoStyle] = useState();

  const aboutInfoReadStyle = {
    paddingLeft: "0",
  };

  const textareaStyle = {
    fontWeight: `${title ? "700" : "400"}`,
    fontSize: `${title ? "18px" : "14px"}`,
    paddingLeft: "16px",
    maxWidth: "88%",
  };

  useEffect(() => {
    if (id === "info") {
      if (editing) {
        setAboutInfoStyle(textareaStyle);
      } else setAboutInfoStyle(aboutInfoReadStyle);
    } else setAboutInfoStyle(textareaStyle);
  }, []);

  const changeHandler = (event) => {
    const currentValue = event.target.value;
    setNewValue(currentValue);
  };

  return (
    <EditableComponent
      date={date ? true : false}
      whiteText={whiteText ? true : false}
    >
      <div
        className={`inline-input ${type === "textarea" ? "textarea" : ""} ${
          date ? "date" : ""
        }
        ${box ? "box" : ""}`}
      >
        {label && <label htmlFor={id}>{label}</label>}
        {type === "textarea" ? (
          <TextareaAutosize
            id={id}
            value={newValue}
            readOnly={!editing}
            onChange={(event) => changeHandler(event)}
            style={aboutIfoStyle}
            minRows={1}
            rows={1}
          ></TextareaAutosize>
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
