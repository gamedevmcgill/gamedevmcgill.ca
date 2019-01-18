import styled from "styled-components";
import { lighten } from "polished";

const NavbarItem = styled.li`
  color: ${props => props.theme.colors.primary};
  list-style: none;
  display: inline-block;
  margin-right: 1.6rem;
  font-weight: 700;
  transition: 0.2s all ease-in-out;
  text-transform: uppercase;
  &:hover {
    color: ${props => lighten(0.3, props.theme.colors.primary)};
  }
`;

export default NavbarItem;
