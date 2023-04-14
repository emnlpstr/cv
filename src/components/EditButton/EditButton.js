import React, { useContext, useEffect, useState } from "react";
import { ButtonLoginStyle } from "../style/Button.style";
import { EditContext } from "../../context/editContext/editContext";
import { EditingContext } from "../../context/editingContext/editingContext";

const EditBtn = () => {
  const { edit } = useContext(EditContext);
  const { editing, setEditing } = useContext(EditingContext);

  const editBtn = {
    background: editing ? "rgb(191, 118, 80)" : "#6fbf50",
    position: "fixed",
    right: "5%",
    top: "200px",
    borderRadius: "100%",
  };

  const editingHandler = () => {
    setEditing(!editing);
  };

  useEffect(() => {
    console.log(edit);
  }, [edit]);

  return (
    <>
      {edit && (
        <ButtonLoginStyle style={editBtn} onClick={() => editingHandler()}>
          <svg version="1.1" width="22" height="22" viewBox="0 0 16 16">
            <path
              fill="#ffffff"
              d="M13.5 0c1.381 0 2.5 1.119 2.5 2.5 0 0.563-0.186 1.082-0.5 1.5l-1 1-3.5-3.5 1-1c0.418-0.314 0.937-0.5 1.5-0.5zM1 11.5l-1 4.5 4.5-1 9.25-9.25-3.5-3.5-9.25 9.25zM11.181 5.681l-7 7-0.862-0.862 7-7 0.862 0.862z"
            ></path>
          </svg>
        </ButtonLoginStyle>
      )}
    </>
  );
};

export default EditBtn;
