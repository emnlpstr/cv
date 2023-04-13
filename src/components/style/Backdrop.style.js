import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: calc(100vh - 140px);
  top: 140px;;
  left: 0;
  backdrop-filter: blur(10px);
  z-index: 99;
`;
