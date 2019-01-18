import * as React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
import Wordmark from "../../../static/logos/wordmark.svg";
import Logo from "../../../static/logos/logo.svg";
import NavbarItem from "./NavItem";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 6rem;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  filter: drop-shadow(0 0 1.25rem grey);
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
    <img src={Wordmark} alt="Game Dev McGill" />
    <img src={Logo} alt="Game Dev McGill" />
    <ul>
      {sections.map(s => (
        <AnchorLink href={`#${s.id}`} key={s.id}>
          <NavbarItem>{s.name}</NavbarItem>
        </AnchorLink>
      ))}
    </ul>
  </Nav>
);

export default Navbar;
