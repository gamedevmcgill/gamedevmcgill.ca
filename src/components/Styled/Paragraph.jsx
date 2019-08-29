import styled from "styled-components";

const Paragraph = styled.p`
  position: relative;
  line-height: 1.5;
  letter-spacing: 0.5px;
  ${props => props.small && "font-size: 1.4rem;"}
`;

export default Paragraph;
