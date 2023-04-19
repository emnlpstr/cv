import styled from "styled-components";

export const LoginWrapper = styled.div`
  .user-form {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -75px;
    background: rgb(245, 238, 214);
    box-shadow: 0px 10px 15px -3px rgba(53, 20, 7, 0.1);
    z-index: 99;

    @media (max-width: 768px) {
      height: fit-content;
      top: 94px;
    }

    &__wrapper {
      gap: 40px;
      display: flex;
      padding: 22px 50px;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
`;
