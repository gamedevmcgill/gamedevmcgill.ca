import React from "react";
import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import { Flex, Box } from "@rebass/grid";
import Title from "./Title";
import StyledBox from "../Styled/StyledBox";
import Paragraph from "../Styled/Paragraph";

// https://github.com/gatsbyjs/gatsby/issues/309
try {
  // eslint-disable-next-line
  require("intersection-observer");
} catch (e) {
  /* only throws if run server-side */
}

const Events = ({ events }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const trail = useTrail(events.length, {
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 100,
    from: { opacity: 0, x: 100 }
  });

  return (
    <div ref={ref}>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {trail.map(({ x, ...rest }, index) => (
          <Box key={events[index].title} width={[1, 1 / 2, 1 / 4]}>
            <animated.div
              style={{
                ...rest,
                transform: x.interpolate(_x => `translate3d(0,${_x}px,0)`)
              }}
            >
              <StyledBox
                key={events[index].title}
                m="1rem"
                p="1rem"
                style={{ height: "36rem" }}
              >
                <article>
                  <Flex flexDirection="column" alignItems="center">
                    <Title>{events[index].title}</Title>
                    <img
                      style={{
                        objectFit: "contain",
                        width: "50%"
                      }}
                      src={events[index].image}
                      alt={events[index].title}
                    />
                    <Paragraph small>{events[index].description}</Paragraph>
                  </Flex>
                </article>
              </StyledBox>
            </animated.div>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default Events;
