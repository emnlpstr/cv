import styled from "styled-components";

export const ButtonStyle = styled.button`
  background: rgb(191, 118, 80);
  border-radius: 100px;
  height: 32px;
  padding: 4px 16px;
  font-size: 16px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    background: #a86847;
  }
`;

export const ButtonLoginStyle = styled.button`
  border: none;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  width: 52px;
  height: 52px;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #f2f3f5;
    transition: 0.3s ease;
  }

  .icon {
    height: 24px;
    width: 24px;
    path {
      fill: "#3D2A26";
    }
  }
`;