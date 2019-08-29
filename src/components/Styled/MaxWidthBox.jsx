import styled from "styled-components";
import { Box } from "reflexbox/styled-components";

const MaxWidthBox = styled(Box)`
  max-width: ${props => props.maxWidth};
  position: relative;
  height: auto;
`;

export default MaxWidthBox;
