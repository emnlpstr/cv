import styled from "styled-components";

export const LoginWrapper = styled.div`
  .user-form {
    display: flex;
    gap: 40px;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -76px;
    padding: 22px 50px;
    background: rgb(245, 238, 214);
    cursor: default;
    box-shadow: 0px 10px 15px -3px rgba(53, 20, 7, 0.1);
    z-index: 99;

    @media (max-width: 634px) {
      flex-direction: column;
      height: fit-content;
      max-width: 92%;
      top: 94px;
    }

    @media (max-width: 425px) {
      max-width: 87%;
    }

    @media (max-width: 375px) {
      max-width: 87%;
    }
  }
`;
