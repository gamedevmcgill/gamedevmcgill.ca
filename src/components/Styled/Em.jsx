import styled from "styled-components";

const Em = styled.em`
  background: ${props => props.theme.gradients[props.gradient || "primary"]};
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-style: normal;

  ${props =>
    props.noBackground ||
    `
    position: relative;
    &::after {
      position: absolute;
      background: black;
      content: "";
      width: calc(100% + 1rem);
      height: 100%;
      top: 0.5rem;
      left: -0.5rem;
      z-index: -1;
    }`}
`;

export default Em;
