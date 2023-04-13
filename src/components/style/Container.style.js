import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  width: calc(100% - 1rem);
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: 1023px) {
    padding: 0;
  }
`;
