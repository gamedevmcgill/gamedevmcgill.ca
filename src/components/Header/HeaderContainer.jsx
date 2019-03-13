import styled from "styled-components";
import { transparentize } from "polished";

const Container = styled.header`
  background: ${props => {
    if (props.img) {
      return `
      linear-gradient(
          45deg,
          ${transparentize(0.05, props.theme.colors.black)},
          ${transparentize(0.1, props.theme.colors.black)} 60%,
          ${transparentize(0.9, props.theme.colors.black)} 99%
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
  width: calc(100% - 2rem);
  border-bottom-right-radius: 12rem;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: calc(100% + 2rem);
    z-index: -1;
    content: "";
    background: ${props => props.theme.gradients.secondary}
  }
`;

export default Container;
