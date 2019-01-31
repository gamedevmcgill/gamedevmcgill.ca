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
        <H1 style={{ marginBottom: "0.4rem" }}>{title}</H1>
        <Flex
          justifyContent="space-around"
          style={{ fontSize: "1.4rem", fontWeight: "700" }}
        >
          {author && <p>by {author}</p>}
          {date && <p>{date}</p>}
        </Flex>
      </MaxWidthBox>
      {tags && <PostTags tags={tags} />}
    </Box>
  </Container>
);

export default Header;
