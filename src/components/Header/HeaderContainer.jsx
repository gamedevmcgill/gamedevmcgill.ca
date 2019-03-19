import styled from "styled-components";

const Container = styled.header`
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: ${props => (props.tall ? "50rem" : "30rem")};
  position: relative;

  &::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2rem;
    z-index: -1;
    content: "";
    background: ${props => props.theme.gradients.secondary};
  }
`;

export default Container;
