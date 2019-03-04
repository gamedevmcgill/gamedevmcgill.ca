import * as React from "react";
import { Flex } from "@rebass/grid";
import Title from "./Title";
import StyledBox from "../Styled/StyledBox";
import Paragraph from "../Styled/Paragraph";

const Events = ({ events }) => (
  <Flex flexWrap="wrap" alignItems="space-between">
    {events.map(e => (
      <StyledBox width={[1, "45%", "22.5%"]} key={e.title} m="1rem" p="1rem">
        <article>
          <Flex flexDirection="column" alignItems="center">
            <Title>{e.title}</Title>
            <img
              style={{
                objectFit: "contain",
                width: "50%",
                height: "100%"
              }}
              src={e.image}
              alt={e.title}
            />
            <Paragraph small>{e.description}</Paragraph>
          </Flex>
        </article>
      </StyledBox>
    ))}
  </Flex>
);

export default Events;
