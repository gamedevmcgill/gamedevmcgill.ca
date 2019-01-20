import * as React from "react";

import Container from "./HeaderContainer";
import ReturnLink from "./HeaderLink";
import H1 from "../Styled/H1";
import PostTags from "../PostTags/PostTags";
import MaxWidthBox from "../Styled/MaxWidthBox";


const Header = ({ title, img, author, tags }) => (
  <Container img={img}>
    <ReturnLink />
    <MaxWidthBox maxWidth="80rem" mb="2rem">
      <H1 light style={{ marginBottom: "1rem" }}>
        {title}
      </H1>
      <span style={{ color: "white" }}>by {author}</span>
    </MaxWidthBox>
    <PostTags tags={tags} />
  </Container>
);

export default Header;
