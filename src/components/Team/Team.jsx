import * as React from "react";
import Img from "gatsby-image";
import { Flex, Box } from "@rebass/grid";
import Name from "./Name";
import Position from "./Position";
import Game from "./Game";
import StyledBox from "../Styled/StyledBox";
import Em from "../Styled/Em";

const Team = ({ members }) => (
  <StyledBox p="4rem">
    <Flex flexWrap="wrap">
      {members &&
        members.map(m => (
          <Box m="2rem 0" width={[1, "50%", "33%"]} key={m.name}>
            <article>
              <Flex flexDirection="column" alignItems="center">
                <Img
                  fluid={m.portrait.childImageSharp.fluid}
                  alt={m.name}
                  style={{
                    width: "16rem",
                    height: "16rem"
                  }}
                  imgStyle={{
                    borderRadius: "50%"
                  }}
                />
                <Name>
                  <Em>{m.name}</Em>
                </Name>
                <Position>{m.position}</Position>
                <Game>
                  <span role="img" aria-label="Favorite Game">
                    ❤️
                  </span>{" "}
                  {m.game}
                </Game>
              </Flex>
            </article>
          </Box>
        ))}
    </Flex>
  </StyledBox>
);

export default Team;
