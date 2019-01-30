import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Observer from "@researchgate/react-intersection-observer";
import "intersection-observer";
import MediaQuery from "react-responsive";
import { Transition } from "react-spring";

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
      <div>
        <Transition
          items={!isVisible}
          from={{ opacity: 0, top: "0rem" }}
          enter={{ opacity: 1, top: "2rem" }}
          leave={{ opacity: 0 }}
        >
          {toggle => props => (
            <div
              style={Object.assign(
                {
                  position: toggle ? "fixed" : "absolute",
                  left: "2rem"
                },
                props
              )}
            >
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
            </div>
          )}
        </Transition>
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
      </div>
    );
  }
}

export default ReturnLinkComponent;
