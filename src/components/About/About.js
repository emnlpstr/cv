import React, { useContext, useEffect } from "react";
import { EditableComponent } from "../style/EditableComponent.style";
import { EditableInput } from "../Input/EditableInput";
import { DataContext } from "../../context/dataContext/dataContext";

export const About = () => {
  const { dataContext, setDataContext } = useContext(DataContext);

  return (
    <EditableComponent style={{borderTop: "1px solid #000"}}>
      <h2>About</h2>
      {dataContext.about.map((input) => {
        return (
          <EditableInput
            id={input.id}
            value={input.value}
            label={input.label}
            type={input.type}
            whiteText={true}
          ></EditableInput>
        );
      })}
    </EditableComponent>
  );
};
