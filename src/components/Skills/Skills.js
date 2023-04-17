import React, { useContext, useRef } from "react";
import { BoxEducationWrapper } from "../BoxEducation/BoxEducation.style";
import { EditingContext } from "../../context/editingContext/editingContext";
import { ButtonStyle } from "../style/Button.style";
import { DataContext } from "../../context/dataContext/dataContext";

export const Skills = ({ content }) => {
  const { editing } = useContext(EditingContext);
  const { dataContext, setDataContext } = useContext(DataContext);
  const inputRef = useRef("input");

  const addHandler = () => {
    let newSkills = dataContext.skills;
    newSkills.push(inputRef.current.value);
    setDataContext({ ...dataContext, skills: newSkills });
  };

  const deleteHandler = (event, index) => {
    setDataContext({
      ...dataContext,
      skills: dataContext.skills.filter(
        (skill, skillIndex) => skillIndex !== index
      ),
    });
  };

  return (
    <BoxEducationWrapper>
      <h2>Skills</h2>
      {editing && (
        <div style={{ display: "flex", marginBottom: "22px" }}>
          <input type="text" placeholder="Add" ref={inputRef} />
          <ButtonStyle style={{ marginLeft: "30px" }} onClick={addHandler}>
            Add
          </ButtonStyle>
        </div>
      )}
      <div className="chips-wrapper">
        {dataContext.skills.map((chip, index) => {
          return (
            <div className="chip" key={index}>
              {chip}
              {editing && (
                <button
                  onClick={(event) => {
                    deleteHandler(event, index);
                  }}
                >
                  <svg version="1.1" width="16" height="16" viewBox="0 0 16 16">
                    <path
                      fill="#000000"
                      d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </BoxEducationWrapper>
  );
};
