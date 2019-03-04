import * as React from "react";
import { Box, Flex } from "@rebass/grid";

import Container from "./HeaderContainer";
import ReturnLink from "./HeaderLink";
import H1 from "../Styled/H1";
import PostTags from "../PostTags/PostTags";
import MaxWidthBox from "../Styled/MaxWidthBox";

const Header = ({ title, img, author, tags, date }) => (
  <Container img={img}>
    <ReturnLink />
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

export default Header;
