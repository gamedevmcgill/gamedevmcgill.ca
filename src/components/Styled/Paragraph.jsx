import styled from "styled-components";

const Paragraph = styled.p`
  line-height: 2;
  letter-spacing: 0.5px;
  ${props => props.small && "font-size: 1.4rem" }
`;

export default Paragraph;
