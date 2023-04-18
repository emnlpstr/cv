import styled from "styled-components";

export const SidemenuStyle = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      a {
        display: block;
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        width: 100%;
        height: 100%;
        padding: 12px 10px;

        &:hover {
          background: rgba(255, 255, 255, 0.2);
          transition: 0.3s ease;
        }
      }
    }
  }
`;
