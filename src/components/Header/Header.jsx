import * as React from "react";
import MediaQuery from "react-responsive";
import { Flex } from "reflexbox/styled-components";
import { useInView } from "react-intersection-observer";
import Img from "gatsby-image";
import styled from "styled-components";

import Container from "./HeaderContainer";
import PostTags from "../PostTags/PostTags";
import MaxWidthBox from "../Styled/MaxWidthBox";
import DynamicReturnLink from "./DynamicReturnLink";
import StaticReturnLink from "./StaticReturnLink";

// https://github.com/gatsbyjs/gatsby/issues/309
try {
  // eslint-disable-next-line
  require("intersection-observer");
} catch (e) {
  /* only throws if run server-side */
}

// need bespoke header (not H1 shared component)
// cuz this page is carefully formatted
const HeaderTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 800;
  letter-spacing: 0.2rem;
  background: ${props => props.theme.gradients.secondary};
  margin-top: 4rem;
  margin-bottom: 0.6rem;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  @media (max-width: 60rem) {
    font-size: 3.6rem;
    margin-top: 2rem;
  }
`;

const Header = ({ title, img, author, tags, date, tall }) => {
  const [ref, inView] = useInView();

  return (
    <Container ref={ref} tall={tall}>
      <MediaQuery minWidth={1200}>
        <DynamicReturnLink inView={inView} />
      </MediaQuery>
      <MediaQuery maxWidth={1200}>
        <StaticReturnLink />
      </MediaQuery>
      <MaxWidthBox maxWidth={800} p="0 1rem">
        <HeaderTitle>{title}</HeaderTitle>
        <Flex
          justifyContent="flex-end"
          mb="1rem"
          p="0 1rem"
          style={{ fontSize: "1.4rem", letterSpacing: "1px" }}
        >
          <span>
            {author && <strong>by {author}</strong>} {date && `on ${date}`}
          </span>
        </Flex>
      </MaxWidthBox>

      {tags && <PostTags tags={tags} />}

      <div>
        {img && (
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
        )}
      </div>
    </Container>
  );
};

export default Header;
