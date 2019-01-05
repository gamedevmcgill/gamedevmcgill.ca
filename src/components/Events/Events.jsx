import * as React from "react";
import { Flex } from "@rebass/grid";
import Title from "./Title";
import StyledBox from "../Styled/StyledBox";
import Paragraph from "../Styled/Paragraph";

const Events = ({ events }) => (
  <Flex flexWrap="wrap" alignItems="space-between">
    {events.map(e => (
      <StyledBox width={[1, "45%", "22.5%"]} key={e.title} m="0 1rem">
        <article>
          <Title>{e.title}</Title>
          <img
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%"
            }}
            src={e.image}
            alt={e.title}
          />
          <Paragraph small>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Paragraph>
        </article>
      </StyledBox>
    ))}
  </Flex>
);

export default Events;
