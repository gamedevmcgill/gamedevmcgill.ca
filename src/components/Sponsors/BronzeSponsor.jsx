import * as React from "react";
import { Flex } from "reflexbox/styled-components";
import BronzeImage from "./BronzeImage";

const BronzeSponsor = ({ sponsors }) => (
  <Flex>
    {sponsors.map(s => (
      <a href={s.website} key={s.name}>
        <BronzeImage src={s.logo} alt={s.name} />
      </a>
    ))}
  </Flex>
);

export default BronzeSponsor;
