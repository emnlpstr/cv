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
    }

    input {
      display: inline-flex;
      background: none;
      width: fit-content;
      border: none;
      font-family: "Titillium Web", sans-serif;
      font-style: italic;
      border-bottom: 1px solid #000;
      font-weight: 300;
      width: 100%;

      &[readonly] {
        font-style: normal;
        background: none;
        border: none;
        outline: none;
        cursor: default;
        font-weight: 400;
      }
    }

    &.textarea {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 200px;
      max-width: 100%;
      max-height: 200px;

      textarea {
        width: 100%;
        height: 200px;
        resize: none;
        font-family: "Titillium Web", sans-serif;

        &[readonly] {
          background: none;
          border: none;
        }
      }
    }

    &.date {
      display: inline-flex;

      input {
        width: 52px;
        &[readonly] {
          font-weight: 700;
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
