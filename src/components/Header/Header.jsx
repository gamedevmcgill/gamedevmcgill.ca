import * as React from "react";
import MediaQuery from "react-responsive";
import { Box, Flex } from "@rebass/grid";
import { useInView } from "react-intersection-observer";
import Img from "gatsby-image";

import Container from "./HeaderContainer";
import ReturnLink from "./HeaderLink";
import Em from "../Styled/Em";
import H1 from "../Styled/H1";
import PostTags from "../PostTags/PostTags";
import MaxWidthBox from "../Styled/MaxWidthBox";

// https://github.com/gatsbyjs/gatsby/issues/309
try {
  // eslint-disable-next-line
  require("intersection-observer");
} catch (e) {
  /* only throws if run server-side */
}

const Header = ({ title, img, author, tags, date, tall }) => {
  const [ref, inView] = useInView();

  return (
    <Container ref={ref} tall={tall}>
      <MediaQuery minWidth={1100}>
        <ReturnLink inView={inView} />
      </MediaQuery>
      <Box mb={tall && "24rem"}>
        <MaxWidthBox maxWidth="80rem">
          <H1 style={{ marginBottom: "1rem" }} color="light">
            <Em gradient="secondary">{title}</Em>
          </H1>
        </MaxWidthBox>
        <Flex
          justifyContent="flex-end"
          mb="3rem"
          style={{ fontSize: "1.4rem", letterSpacing: "1px" }}
        >
          <span>
            {author && <strong>by {author}</strong>} {date && `on ${date}`}
          </span>
        </Flex>
        {tags && <PostTags tags={tags} />}
      </Box>
      <Img
        fluid={img.childImageSharp.fluid}
        style={{
          position: "absolute",
          filter: "brightness(0.4)",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: -100
        }}
      />
    </Container>
  );
};

export default Header;
