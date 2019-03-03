import * as React from "react";
import { Flex, Box } from "@rebass/grid";
import Name from "./Name";
import Portrait from "./Portrait";
import Position from "./Position";
import Game from "./Game";

const Team = ({ members }) => (
  <Flex flexWrap="wrap">
    {members &&
      members.map(m => (
        <Box m="2rem 0" width={[1, "50%", "33%"]} key={m.name}>
          <article>
            <Flex flexDirection="column" alignItems="center">
              <Portrait src={m.portrait} />
              <Name>{m.name}</Name>
              <Position>POSITION: {m.position}</Position>
              <Game>
                <span role="img" aria-label="Favorite Game">
                  ❤️ 🕹
                </span>{" "}
                : {m.game}
              </Game>
            </Flex>
          </article>
        </Box>
      ))}
  </Flex>
);

export default Team;
