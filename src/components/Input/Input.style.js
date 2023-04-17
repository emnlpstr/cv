import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;

  input {
    border: none;
    border-radius: 3px;
    height: 24px;
    padding: 2px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgb(168, 104, 71);
    border-radius: 4px;
    width: 100%;

    &[disabled] {
      opacity: .5;
    }
  }

  textarea {
    font-family: "Titillium Web", sans-serif;
    width: 100%;
    max-width: 100%;
    max-height: 212px;
  }
`;
