import styled from "styled-components";

export const SidemenuStyle = styled.div`

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      
      &+li {
        margin-top: 12px;
      }

      a {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
      }
    }
  }
`;
