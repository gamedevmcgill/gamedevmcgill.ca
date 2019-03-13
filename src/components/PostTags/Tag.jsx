import styled from "styled-components";

const Tag = styled.div`
  font-weight: 600;
  background: ${props => props.theme.colors.black};
  border: none;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  min-width: 8rem;
  padding: 0.4rem 1rem;
  display: inline-block;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  text-align: center;
  transition: 0.2s all ease-in-out;
  &:hover {
    background: linear-gradient(
        45deg,
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.orange}
      ),
      ${props => props.theme.colors.primary};
  }
`;

export default Tag;
