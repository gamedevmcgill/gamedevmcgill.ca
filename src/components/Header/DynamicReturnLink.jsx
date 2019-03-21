import * as React from "react";
import { Link } from "gatsby";
import { useTransition, animated } from "react-spring";

import { Flex } from "@rebass/grid";
import Button from "../Styled/Button";
import Logo from "../../../static/logos/logo.svg";

const ReturnLinkComponent = ({ inView }) => {
  const transitions = useTransition(inView, null, {
    from: { opacity: 0, top: 50 },
    enter: { opacity: 1, top: 30, left: 20 },
    leave: { opacity: 0 }
  });

  return transitions.map(({ item, key, props }) => (
    <animated.span
      key={key}
      style={{ ...props, position: item ? "absolute" : "fixed" }}
    >
      <Link to="/">
        <Button>
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
      </Link>
    </animated.span>
  ));
};

export default ReturnLinkComponent;
