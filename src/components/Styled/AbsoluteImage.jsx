import styled from "styled-components";

const AbsoluteImage = styled.img`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  width: ${props => props.imgWidth};
  height: auto;
`;

export default AbsoluteImage;
