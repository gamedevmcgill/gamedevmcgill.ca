import styled from "styled-components";

const NavbarItem = styled.li`
  color: ${props => props.theme.colors.white};
  list-style: none;
  display: inline-block;
  margin-right: 1.6rem;
  font-weight: 700;
  transition: 0.2s all ease-in-out;
  text-transform: uppercase;
  &:hover {
    color: ${props => props.theme.colors.green};
  }
`;

export default NavbarItem;
