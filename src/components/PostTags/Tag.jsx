import styled from "styled-components";

const Tag = styled.div`
  font-weight: 300;
  background: ${props => props.theme.colors.green};
  border: none;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding: 0.4rem 1rem;
  display: inline-block;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.black};
  cursor: pointer;
  transition: 0.2s background ease-in-out;
  &:hover {
    background: ${props => props.theme.colors.blue};
  }
`;

export default Tag;
