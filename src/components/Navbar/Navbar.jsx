import * as React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MediaQuery from "react-responsive";
import styled from "styled-components";
import { Box } from "@rebass/grid";

import Wordmark from "../../../static/logos/wordmark.svg";
import Logo from "../../../static/logos/logo.svg";
import NavbarItem from "./NavItem";

const Nav = styled.nav`
  position: fixed;
  z-index: 10;
  height: 8rem;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
`;

const sections = [
  {
    id: "about",
    name: "About"
  },
  {
    id: "games",
    name: "Games"
  },
  {
    id: "events",
    name: "Events"
  },
  {
    id: "blog",
    name: "Blog"
  },
  {
    id: "team",
    name: "Team"
  },
  {
    id: "sponsor",
    name: "Sponsor"
  }
];

const Navbar = () => (
  <Nav>
    <MediaQuery minWidth={900}>
      <img src={Wordmark} alt="Game Dev McGill desktop logo" />
    </MediaQuery>
    <MediaQuery maxWidth={900}>
      <Box width="6rem">
        <img src={Logo} alt="Game Dev McGill mobile logo" />
      </Box>
    </MediaQuery>
    <ul>
      {sections.map(s => (
        <AnchorLink offset="100" href={`#${s.id}`} key={s.id}>
          <NavbarItem>{s.name}</NavbarItem>
        </AnchorLink>
      ))}
    </ul>
  </Nav>
);

export default Navbar;
