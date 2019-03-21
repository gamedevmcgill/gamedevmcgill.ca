import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left: 4rem;
  align-self: flex-start;
  position: relative;
  transition: 0.2s all ease-in-out;

  &:before {
    transition: 0.2s all ease-in-out;
    position: absolute;
    content: "←";
    left: -2rem;
  }

  &:hover {
    letter-spacing: 2.2px;
    &:before {
      left: -3rem;
    }
  }
`;

const StaticReturnLink = () => <HeaderLink to="/">Back to home</HeaderLink>;

export default StaticReturnLink;
