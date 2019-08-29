import styled from "styled-components";
import { Box } from "reflexbox/styled-components";

const StyledBox = styled(Box)`
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: ${props => props.theme.boxShadow};
  background: ${props => props.theme.colors.white};
  transition: 0.2s all ease-in;

  position: relative;
  overflow: hidden;

  ${props =>
    props.hoverable &&
    `
    &::after {
      content: "";
      position: absolute;
      transition: 0.3s all ease-in-out;
      width: 50%;
      top: 0;
      bottom: 0;
      z-index: 2;
      background: rgba(255,255,255,0.25);
      transform: translateX(-120%) skew(20deg);
    }
    
    &:hover {
        transform: scale(1.01);
      &::after {
        transform: translateX(200%) skew(20deg);
    }
      }
    `};
`;

export default StyledBox;
