import styled from "styled-components";

export const BoxEducationWrapper = styled.div`
  padding: 22px;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.8);
  display: grid;
  background: transparent;
  box-shadow: 0px 0px 13px -2px rgba(53, 20, 7 ,0.2);

  .box-education {
    display: grid;
    
    & + .box-education {
      margin-top: 22px;
    }

    .dates {
      font-weight: 700;
      font-size: 18px;
      display: flex;
      align-items: center;

      input {
        display: inline-flex;
      }
    }

    .title {
      font-weight: 700;
      font-size: 16px;
    }
  }

  .chips-wrapper {
    display: flex;
    flex-wrap: wrap;

    .chip {
      display: inline-flex;
      padding: 5px 12px;
      border-radius: 100px;
      white-space: nowrap;
      background: rgba(255, 255, 255, 0.8);
      margin: 5px 12px;
      align-items: center;

      button {
        background: none;
        border: none;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;
