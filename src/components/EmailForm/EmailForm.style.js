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
    background: rgb(142, 60, 33);
    padding: 40px 80px;
    box-shadow: rgba(53, 20, 7, 0.1) 0px 10px 15px -3px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 375px) {
      padding: 40px 36px;
    }

    .btn-close {
      position: fixed;
      right: 5%;
      top: 280px;
      border-radius: 100%;
      width: 32px;
      height: 32px;
    }

    button[type="submit"] {
      box-shadow: rgba(53, 20, 7, 0.4) 0px 0px 13px 10px;
    }

    textarea {
      max-width: 97%;
      resize: vertical;

      @media (max-width: 768px) {
        max-width: 95%;
      }

      @media (max-width: 375px) {
        max-width: 90%;
      }
    }
  }
`;
