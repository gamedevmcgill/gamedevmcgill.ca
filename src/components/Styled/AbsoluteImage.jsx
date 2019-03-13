import styled from "styled-components";

const AbsoluteImage = styled.img`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  width: ${props => props.imgWidth};
  min-height: ${props => props.minHeight};
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
  height: auto;
  z-index: ${props => props.zIndex || -2};
`;

export default AbsoluteImage;
