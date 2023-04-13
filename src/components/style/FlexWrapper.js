import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.spaceBetween === true ? `space-between` : `flex-start`};
  align-items: center;
`;
