import styled from "styled-components";

export const EditableComponent = styled.div`
  margin-top: ${(props) => (props.date ? "0" : "10px")};
  &:first-child {
    margin-top: 0;
  }

  label {
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
  }
  input {
    font-size: 16px;
    font-weight: 400;
    padding: 0 10px;
  }

  .inline-input {
    display: flex;
    align-items: center;

    label {
      padding: 0 0 3px;
      display: inline-flex;
      color: ${(props) =>
        props.whiteText ? "rgb(245, 238, 214)" : "rgb(53, 20, 7)"};
    }

    input {
      display: inline-flex;
      background: none;
      width: fit-content;
      border: none;
      font-family: "Titillium Web", sans-serif;
      font-style: italic;
      border-bottom: ${(props) =>
        props.whiteText ? "1px solid rgb(245, 238, 214)" : "none"};
      font-weight: 300;
      width: 100%;
      color: ${(props) =>
        props.whiteText ? "rgb(245, 238, 214)" : "rgb(53, 20, 7)"};
      box-shadow: ${(props) =>
        props.whiteText ? "none" : "rgba(53, 20, 7, 0.2) 0px 0px 13px -2px"};
      border-radius: ${(props) => (props.whiteText ? "0" : "4px")};
      background: ${(props) => (props.whiteText ? "none" : "#fff")};

      &[readonly] {
        font-style: normal;
        background: none;
        border: none;
        outline: none;
        cursor: default;
        font-weight: 400;
        color: ${(props) =>
          props.whiteText ? "rgb(245, 238, 214)" : "rgb(53, 20, 7)"};
        box-shadow: none;
      }
    }

    &.textarea {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 100%;

      textarea {
        width: 100%;
        max-width: 94%;
        resize: none;
        font-family: "Titillium Web", sans-serif;
        box-shadow: 0px 0px 13px -2px rgba(53, 20, 7, 0.2);
        color: "rgb(53, 20, 7)";

        &[readonly] {
          max-width: 94%;
          background: none;
          border: none;
          box-shadow: none;
          color: ${(props) =>
            props.whiteText ? "rgb(245, 238, 214)" : "rgb(53, 20, 7)"};
        }
      }
    }

    &.date {
      display: inline-flex;

      input {
        width: 52px;
        box-shadow: rgba(53, 20, 7, 0.2) 0px 0px 13px -2px;
        background: #fff;
        border: none;
        border-radius: 4px;

        &[readonly] {
          font-weight: 700;
          background: none;
          box-shadow: none;
        }
      }
    }

    &.box {
      height: fit-content;

      textarea {
        height: fit-content;
      }
    }
  }
`;
