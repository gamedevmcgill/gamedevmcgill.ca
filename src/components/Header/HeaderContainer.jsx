import styled from "styled-components";
import { transparentize } from "polished";

const Container = styled.header`
  background: linear-gradient(
      45deg,
      ${props => transparentize(0.1, props.theme.colors.blue)},
      ${props => transparentize(0.1, props.theme.colors.green)}
    ),
    url(${props => props.img});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 50rem;
`;

export default Container;
