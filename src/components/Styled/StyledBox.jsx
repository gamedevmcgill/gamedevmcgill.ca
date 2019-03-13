import styled from "styled-components";
import { Box } from "@rebass/grid";

const StyledBox = styled(Box)`
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: ${props => props.theme.boxShadow};
  background: ${props => props.theme.colors.white};
  transition: 0.2s all ease-in;
  ${props =>
    props.hoverable &&
    `&:hover {
    transform: scale(1.01);
    }
    `};
`;

export default StyledBox;
