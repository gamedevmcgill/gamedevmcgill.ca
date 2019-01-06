import styled from "styled-components";
import { Box } from "@rebass/grid";

const StyledBox = styled(Box)`
  border-radius: 2rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.01), 0 8px 16px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.colors.white};
`;

export default StyledBox;
