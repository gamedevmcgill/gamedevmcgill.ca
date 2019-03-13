import * as React from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

const H2 = styled.h2`
  font-size: 4.8rem;
  font-weight: 900;
  text-align: center;
  text-transform: lowercase;
  letter-spacing: 0.4rem;
  color: ${props => props.theme.colors.black};
  position: relative;
  display: inline-block;
  margin: auto;

  &:after {
    position: absolute;
    content: "";
    width: calc(100% + 2rem);
    height: 3rem;
    top: 3.5rem;
    left: -1rem;
    background: ${props => `linear-gradient(
          45deg,
          ${props.theme.colors.blue},
          ${props.theme.colors.green}
        )`};
    z-index: -1;
  }
`;

const a = ({ children }) => (
  <Flex mb="5rem">
    <H2>{children}</H2>
  </Flex>
);

export default a;
