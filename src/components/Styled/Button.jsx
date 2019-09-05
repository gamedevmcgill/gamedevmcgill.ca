import styled from "styled-components";
import { rgba } from "polished";

const Button = styled.button.attrs({ type: "button" })`
  padding: 1.2rem 2rem;
  border-radius: 5rem;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  transition: all 0.2s ease-in-out;
  background: ${props =>
    props.secondary
      ? props.theme.gradients.secondary
      : props.theme.gradients.primary};
  &:hover {
    transform: translate(0.02rem, -0.02rem);
    box-shadow: -0.02rem 0.6rem 0.6rem
      ${props =>
        rgba(
          props.secondary
            ? props.theme.colors.blue
            : props.theme.colors.primary,
          0.25
        )};
  }
`;

export default Button;
