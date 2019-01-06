import * as React from "react";
import { Flex } from "@rebass/grid";
import SponsorImage from "./SponsorImage";

const Sponsors = ({ sponsors }) => (
  <Flex>
    {sponsors.map(s => (
      <a href={s.website} key={s.name}>
        <SponsorImage src={s.logo} alt={s.name} />
      </a>
    ))}
  </Flex>
);

export default Sponsors;
