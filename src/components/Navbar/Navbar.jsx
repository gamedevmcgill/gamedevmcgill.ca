import * as React from "react";
import styled from "styled-components";
import Wordmark from "../../../static/logos/wordmark.svg";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 6rem;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 2;
`;

const Navbar = () => (
  <Nav>
    <img src={Wordmark} alt="Game Dev McGill" />
  </Nav>
);

export default Navbar;
