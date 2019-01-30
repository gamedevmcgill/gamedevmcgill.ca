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
      <MaxWidthBox maxWidth="80rem" mb="2rem">
        <H1 light>{title}</H1>
      </MaxWidthBox>
      {tags && <PostTags tags={tags} />}
      <Flex
        justifyContent="space-around"
        style={{ color: "white", fontSize: "1.4rem", fontWeight: "700" }}
      >
        {author && <p>by {author}</p>}
        {date && <p>{date}</p>}
      </Flex>
    </Box>
  </Container>
);

export default Header;
