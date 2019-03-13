import * as React from "react";
import MediaQuery from "react-responsive";
import { Box, Flex } from "@rebass/grid";
import { useInView } from "react-intersection-observer";

import Container from "./HeaderContainer";
import ReturnLink from "./HeaderLink";
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

const Header = ({ title, img, author, tags, date }) => {
  const [ref, inView] = useInView();

  return (
    <Container img={img} ref={ref}>
      <MediaQuery minWidth={1100}>
        <ReturnLink inView={inView} />
      </MediaQuery>

      <Box mb="20rem">
        <MaxWidthBox maxWidth="80rem">
          <H1 style={{ marginBottom: "0.4rem" }} color="light">
            {title}
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
    </Container>
  );
};

export default Header;
