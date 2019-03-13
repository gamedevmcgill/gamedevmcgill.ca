import styled from "styled-components";
import { Box } from "@rebass/grid";

const MaxWidthBox = styled(Box)`
  max-width: ${props => props.maxWidth};
  position: relative;
  height: auto;
`;

export default MaxWidthBox;
