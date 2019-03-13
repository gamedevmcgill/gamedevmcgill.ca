import styled from "styled-components";

const H1 = styled.h1`
  font-size: 4.8rem;
  font-weight: 800;
  letter-spacing: 0.2rem;
  color: ${props => {
    switch (props.color) {
      case "light":
        return props.theme.colors.white;
      case "primary":
        return props.theme.colors.primary;
      default:
        return props.theme.colors.black;
    }
  }};
`;
export default H1;
