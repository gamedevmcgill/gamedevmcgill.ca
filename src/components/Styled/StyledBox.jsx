import styled from "styled-components";
import { Box } from "@rebass/grid";

const StyledBox = styled(Box)`
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.01), 0 8px 16px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.colors.white};
  transition: 0.2s all ease-in;
  ${props =>
    props.hoverable &&
    `&:hover {
    transform: scale(1.01);
    box-shadow: 0 14px 14px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    `};
`;

export default StyledBox;
