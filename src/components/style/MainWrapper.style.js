import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;

  @media (max-width: 634px) {
    flex-direction: column;
  }

  .content {
    flex-basis: 70%;
    background: rgb(245, 238, 214);
    height: 100%;
    padding: 22px;
  }
`;
