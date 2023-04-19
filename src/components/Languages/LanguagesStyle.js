import styled from "styled-components";

export const LanguagesStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 22px 0;

  &+div {
    border-top: 1px solid rgb(142, 60, 33);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
    position: relative;
  }

  .delete-btn {
    background: rgb(142, 60, 33);
    justify-self: flex-end;
    width: 22px;
    height: 22px;
    padding: 0;
    margin-left: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      position: absolute;
      top: 22px;
      right: 0;
    }
  }

  .custom-select * {
    color: rgba(53, 20, 7, 0.8);
  }

  .custom-select svg {
    fill: rgba(53, 20, 7, 0.3);
  }
`;
