import * as React from "react";
import { Flex } from "reflexbox/styled-components";
import GoldImage from "./GoldImage";

const GoldSponsor = ({ sponsors }) => (
  <Flex>
    {sponsors.map(s => (
      <a href={s.website} key={s.name}>
        <GoldImage src={s.logo} alt={s.name} />
      </a>
    ))}
  </Flex>
);

export default GoldSponsor;
