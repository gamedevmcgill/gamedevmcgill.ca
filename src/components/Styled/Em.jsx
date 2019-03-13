import styled from "styled-components";

const Em = styled.em`
  background: ${props => `linear-gradient(
          45deg,
          ${props.theme.colors.primary},
          ${props.theme.colors.orange}
        )`};
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  font-style: normal;

  &::after {
    position: absolute;
    background: black;
    content: "";
    width: calc(100% + 1rem);
    height: 100%;
    top: 0.5rem;
    left: -0.5rem;
    z-index: -1;
  }
`;

export default Em;
