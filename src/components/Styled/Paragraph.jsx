import styled from "styled-components";

const Paragraph = styled.p`
  position: relative;
  line-height: ${props => props.small ? 1.5 : 1.6};
  letter-spacing: 0.5px;
  ${props => props.small && "font-size: 1.4rem;"}
`;

export default Paragraph;
