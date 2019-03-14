import styled from "styled-components";
import { rgba } from "polished";

const Tag = styled.div`
  font-weight: 600;
  background: ${props => props.theme.colors.black};
  border: none;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  min-width: 8rem;
  padding: 0.4rem 1rem;
  display: inline-block;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  text-align: center;
  transition: 0.2s box-shadow ease-out;

  &:hover {
    background: ${props => props.theme.gradients.primary};
    box-shadow: -0.04rem 0.3rem 0.3rem
      ${props => rgba(props.theme.colors.primary, 0.25)};
  }
`;

export default Tag;
