import styled from "styled-components";
import { transparentize, darken } from "polished";

const Container = styled.header`
  background: linear-gradient(
      45deg,
      ${props => darken(0.4, props.theme.colors.blue)},
      ${props => transparentize(0.4, props.theme.colors.black)}
    ),
    url(${props => props.img});
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 50rem;
`;

export default Container;
