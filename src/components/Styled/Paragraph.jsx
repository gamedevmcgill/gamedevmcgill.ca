import styled from "styled-components";

const Paragraph = styled.p`
  position: relative;
  line-height: 1.5;
  letter-spacing: 0.5px;
  ${props => props.small && "font-size: 1.4rem"}

  &::after {
    content: "";
    width: 1rem;
    height: 1rem;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    background: ${props => props.theme.gradients.secondary};
    z-index: -1;
  }
`;

export default Paragraph;
