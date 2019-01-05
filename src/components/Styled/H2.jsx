import styled from "styled-components";

const H2 = styled.h2`
  font-size: 4.8rem;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  position: relative;
  &:after {
    position: absolute;
    content: "";
    width: 16rem;
    height: 1.6rem;
    top: 4rem;
    left: 50%;
    margin-left: -8rem;
    background: ${props => props.theme.colors.green};
    z-index: -1;
  }
`;
export default H2;
