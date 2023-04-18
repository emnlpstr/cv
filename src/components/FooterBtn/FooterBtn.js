import React, { useContext, useEffect } from "react";
import { FooterBtnStyle } from "./FooterBtnStyle";
import { ButtonStyle } from "../style/Button.style";
import { EditingContext } from "../../context/editingContext/editingContext";

export const FooterBtn = ({ dataDefault, setDataContext }) => {
  const { editing, setEditing } = useContext(EditingContext);

  const resetFormHandler = () => {
    setDataContext(dataDefault);
  };

  const saveHandler = () => {
    setEditing(false);
  };

  return (
    <>
      {editing && (
        <FooterBtnStyle>
          <ButtonStyle secondary={true} onClick={resetFormHandler}>
            Cancel
          </ButtonStyle>
          <ButtonStyle onClick={saveHandler}>Save</ButtonStyle>
        </FooterBtnStyle>
      )}
    </>
  );
};
