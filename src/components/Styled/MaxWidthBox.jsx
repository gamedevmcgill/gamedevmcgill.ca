import styled from "styled-components";
import { Box } from "@rebass/grid";

const MaxWidthBox = styled(Box)`
  max-width: ${props => props.maxWidth};
  height: auto;
`;

export default MaxWidthBox;
