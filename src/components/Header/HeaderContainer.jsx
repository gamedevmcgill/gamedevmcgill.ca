import styled from "styled-components";
import { transparentize } from "polished";

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
    return props.theme.colors.black;
  }};
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: ${props => props.tall ? '50rem' : '30rem'};
`;

export default Container;
