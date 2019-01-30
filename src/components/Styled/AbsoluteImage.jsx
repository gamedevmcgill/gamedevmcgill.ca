import styled from "styled-components";

const AbsoluteImage = styled.img`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  width: ${props => props.imgWidth};
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
  height: auto;
  z-index: -1;
`;

export default AbsoluteImage;
