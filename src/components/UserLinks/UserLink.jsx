import styled from "styled-components";

const UserLink = styled.a`
  color: ${props => props.theme.colors.white};
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 2px;
  transition: 0.2s all ease-in;
  &:hover {
    color: ${props => props.theme.colors.green};
  }
`
export default UserLink;
