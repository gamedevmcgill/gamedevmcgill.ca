import styled from "styled-components";
import { transparentize, darken } from "polished";

const Container = styled.header`
  background: ${props => {
    if (props.img) {
      return `
      linear-gradient(
          45deg,
          ${transparentize(0.2, props.theme.colors.black)},
          ${transparentize(0.5, props.theme.colors.black)}
        ),
        url(${props.img});
      `;
    }
    return `
      linear-gradient(
          45deg,
          ${darken(0.1, props.theme.colors.blue)},
          ${darken(0.02, props.theme.colors.green)}
        )
      `;
  }};
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 50rem;
`;

export default Container;
