import styled from "styled-components";

export const EmailFormStyle = styled.div`
  position: relative;

  .email-form {
    position: fixed;
    right: 5%;
    top: 280px;
    border-radius: 26px;
    width: calc(100vw - 30%);
    height: 400px;
    z-index: 99;
    background: rgb(191, 118, 80);
    padding: 40px 80px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .btn-close {
      position: fixed;
      right: 5%;
      top: 280px;
      border-radius: 100%;
    }
  }
`;
