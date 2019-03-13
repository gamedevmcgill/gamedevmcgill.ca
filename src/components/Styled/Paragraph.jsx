import styled from "styled-components";

const Paragraph = styled.p`
  line-height: ${props => props.small ? "1.2" : "1.5" };
  letter-spacing: 0.5px;
  ${props => props.small && "font-size: 1.2rem" }
`;

export default Paragraph;
