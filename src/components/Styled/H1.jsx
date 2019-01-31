import styled from "styled-components";

const H1 = styled.h1`
  font-size: 4.8rem;
  font-weight: 900;
  color: ${props =>
    props.light ? props.theme.colors.white : props.theme.colors.black};
`;
export default H1;
