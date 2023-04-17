import React, { useContext, useEffect, useState } from "react";
import { BoxEducationWrapper } from "./BoxEducation.style";
import { EditableInput } from "../Input/EditableInput";
import { EditingContext } from "../../context/editingContext/editingContext";
import { ButtonLoginStyle } from "../style/Button.style";
import { DataContext } from "../../context/dataContext/dataContext";

const smallBtn = {
  background: "rgb(191, 118, 80)",
  justifySelf: "flex-end",
  width: "22px",
  height: "22px",
  padding: "0",
  marginTop: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const BoxEducation = ({ title, professions }) => {
  const { editing } = useContext(EditingContext);
  const { dataContext, setDataContext } = useContext(DataContext);
  const [content, setContent] = useState();

  useEffect(() => {
    if (professions) {
      setContent(dataContext.professions);
    } else {
      setContent(dataContext.education);
    }
  }, [dataContext]);

  const deleteHandler = (event, index) => {
    if (professions) {
      const newProfessions = dataContext.professions.filter(
        (profession, professionIndex) => professionIndex !== index
      );
      setDataContext({ ...dataContext, professions: newProfessions });
    } else {
      const newEducation = dataContext.education.filter(
        (profession, professionIndex) => professionIndex !== index
      );
      setDataContext({ ...dataContext, education: newEducation });
    }
  };

  const addHandler = () => {
    if (professions) {
      const newProfessions = dataContext.professions;
      const newProfession = {
        startYear: "2023",
        endYear: "2023",
        title: "Job title",
        description: "Job description",
      };
      newProfessions.push(newProfession);
      setDataContext({ ...dataContext, professions: newProfessions });
    } else {
      const newEducation = dataContext.education;
      const newProfession = {
        startYear: "2023",
        endYear: "2023",
        title: "University name",
        description: "school name",
      };
      newEducation.push(newProfession);
      setDataContext({ ...dataContext, education: newEducation });
    }
  };

  return (
    <BoxEducationWrapper>
      <h2>{title}</h2>
      {content?.map((box, index) => {
        return (
          <div className="box-education" key={index}>
            {editing && (
              <ButtonLoginStyle
                style={smallBtn}
                onClick={(event) => deleteHandler(event, index)}
              >
                <svg version="1.1" width="12" height="12" viewBox="0 0 16 16">
                  <path
                    fill="#fff"
                    d="M2 5v10c0 0.55 0.45 1 1 1h9c0.55 0 1-0.45 1-1v-10h-11zM5 14h-1v-7h1v7zM7 14h-1v-7h1v7zM9 14h-1v-7h1v7zM11 14h-1v-7h1v7z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M13.25 2h-3.25v-1.25c0-0.412-0.338-0.75-0.75-0.75h-3.5c-0.412 0-0.75 0.338-0.75 0.75v1.25h-3.25c-0.413 0-0.75 0.337-0.75 0.75v1.25h13v-1.25c0-0.413-0.338-0.75-0.75-0.75zM9 2h-3v-0.987h3v0.987z"
                  ></path>
                </svg>
              </ButtonLoginStyle>
            )}
            <div className="dates">
              <EditableInput
                id="start-year"
                value={box.startYear}
                type="number"
                date={true}
              ></EditableInput>{" "}
              -{" "}
              <EditableInput
                id="end-year"
                value={box.endYear}
                type="number"
                date={true}
              ></EditableInput>
            </div>
            <EditableInput
              className="title"
              value={box.title}
              type="textarea"
              box={true}
              title={true}
            ></EditableInput>
            <EditableInput
              className="description"
              value={box.description}
              type="textarea"
              box={true}
            ></EditableInput>
          </div>
        );
      })}
      {editing && (
        <ButtonLoginStyle style={smallBtn} onClick={addHandler}>
          <svg version="1.1" width="12" height="12" viewBox="0 0 16 16">
            <path
              fill="#fff"
              d="M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z"
            ></path>
          </svg>
        </ButtonLoginStyle>
      )}
    </BoxEducationWrapper>
  );
};
