import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Observer from "@researchgate/react-intersection-observer";
import "intersection-observer";
import MediaQuery from "react-responsive";

import { Flex } from "@rebass/grid";
import Button from "../Styled/Button";
import Logo from "../../../static/logos/logo.svg";

const ReturnLink = styled(Link)`
  text-decoration: none;
  font-style: italic;
  font-weight: 200;
  font-size: 1.6rem;
  color: inherit;
  transition: 0.8s all ease-out;
  display: flex;
  align-items: center;
`;

const LinkContainer = styled.div`
  position: ${props => (props.isFixed ? "fixed" : "absolute")};
  color: ${props =>
    props.isFixed ? props.theme.colors.black : props.theme.colors.white};
  top: 3rem;
  left: 2rem;
`;

class ReturnLinkComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
    this.handleIntersection = this.handleIntersection.bind(this);
  }

  handleIntersection(event) {
    this.setState({ isVisible: event.isIntersecting });
  }

  render() {
    const { isVisible } = this.state;

    return (
      <MediaQuery minWidth="80rem">
        <LinkContainer isFixed={!isVisible}>
          <ReturnLink to="/">
            <Button
              secondary
              ref={r => {
                this.button = r;
              }}
            >
              <Flex alignItems="center">
                <img
                  src={Logo}
                  alt="Game Dev McGill"
                  style={{
                    width: "3.2rem",
                    marginRight: "1rem",
                    filter: "drop-shadow(0 0 0.5rem grey)"
                  }}
                />
                Back to home
              </Flex>
            </Button>
          </ReturnLink>
        </LinkContainer>
        <Observer onChange={this.handleIntersection}>
          <div
            style={{
              height: "40rem",
              width: "10px",
              position: "absolute",
              left: "0rem",
              top: 0
            }}
          />
        </Observer>
      </MediaQuery>
    );
  }
}

export default ReturnLinkComponent;
