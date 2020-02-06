import * as React from "react";
import { Flex } from "reflexbox/styled-components";
import SilverImage from "./SilverImage";

const SilverSponsor = ({ sponsors }) => (
  <Flex>
    {sponsors.map(s => (
      <a href={s.website} key={s.name}>
        <SilverImage src={s.logo} alt={s.name} />
      </a>
    ))}
  </Flex>
);

export default SilverSponsor;
