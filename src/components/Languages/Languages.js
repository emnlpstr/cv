import React, { useContext, useEffect } from "react";
import { EditableComponent } from "../style/EditableComponent.style";
import { BoxEducationWrapper } from "../BoxEducation/BoxEducation.style";
import Select from "react-select";
import { DataContext } from "../../context/dataContext/dataContext";
import { LanguagesStyle } from "./LanguagesStyle";
import { EditableInput } from "../Input/EditableInput";
import { ButtonLoginStyle } from "../style/Button.style";
import { EditingContext } from "../../context/editingContext/editingContext";

const smallBtn = {
  background: "rgb(191, 118, 80)",
  justifySelf: "flex-end",
  width: "22px",
  height: "22px",
  padding: "0",
  marginLeft: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Languages = ({ content }) => {
  const { editing } = useContext(EditingContext);
  const { dataContext, setDataContext } = useContext(DataContext);

  useEffect(() => {
    console.log("dataContext", dataContext);
    console.log("content", content);
  }, [dataContext]);

  const addHandler = (event) => {
    const newLanguages = [...dataContext.languages];
    const newLanguage = {
      id: `choose-language`,
      label: "language",
      options: [
        { value: "Advanced", label: "Advanced" },
        { value: "Mid-range", label: "Mid-range" },
        { value: "Beginner", label: "Beginner" },
      ],
      value: 1,
    };
    newLanguages.push(newLanguage);
    console.log("newLanguages", newLanguages);
    setDataContext({ ...dataContext, languages: newLanguages });
  };

  const deleteHandler = (event, index) => {
    const newLanguages2 = dataContext.languages.filter(
      (language, languageIndex) => languageIndex !== index
    );
    setDataContext({ ...dataContext, languages: newLanguages2 });
  };

  return (
    <EditableComponent>
      <BoxEducationWrapper>
        <h2>Conoscenza lingue</h2>
        {dataContext.languages.map((language, index) => {
          return (
            <LanguagesStyle style={{marginTop: "22px"}}>
              <EditableInput
                value={language.label}
                id={`language-${index}`}
                type="text"
              />
              <Select
                isDisabled={editing ? false : true}
                options={language.options}
                defaultValue={language.options[language.value]}
                className="custom-select"
              ></Select>
              {editing && (
                <ButtonLoginStyle
                  style={smallBtn}
                  onClick={(event) => {
                    deleteHandler(event, index);
                  }}
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
            </LanguagesStyle>
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
    </EditableComponent>
  );
};
