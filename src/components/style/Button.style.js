import styled from "styled-components";

export const ButtonStyle = styled.button`
  background: ${(props) => (props.secondary ? "" : "rgb(142, 60, 33)")};
  border-radius: 100px;
  height: 32px;
  padding: 4px 16px;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) =>
    props.secondary ? "rgb(142, 60, 33)" : "rgb(255, 255, 255)"};
  border: none;
  box-shadow: rgba(53, 20, 7, 0.1) 0px 10px 15px -3px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transition: 0.5s ease;
    background: rgb(245, 238, 214);
    color: rgb(142, 60, 33);
    box-shadow: rgba(53, 20, 7, 0.2) 0px 0px 11px 5px;
  }
`;

export const ButtonLoginStyle = styled.button`
  border: none;
  box-shadow: rgba(53, 20, 7, 0.1) 0px 0px 13px 3px;
  width: 52px;
  height: 52px;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.3s ease;

  &.delete-btn {
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
    }
  }

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
