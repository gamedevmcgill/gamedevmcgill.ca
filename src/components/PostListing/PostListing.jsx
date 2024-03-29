import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Flex, Box } from "reflexbox/styled-components";
import { FaClock, FaRegCalendarAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Img from "gatsby-image";
import StyledBox from "../Styled/StyledBox";
import Paragraph from "../Styled/Paragraph";
import MaxWidthBox from "../Styled/MaxWidthBox";
import Info from "./PostInfoText";
import PostTags from "../PostTags/PostTags";

// https://github.com/gatsbyjs/gatsby/issues/309
try {
  // eslint-disable-next-line
  require("intersection-observer");
} catch (e) {
  /* only throws if run server-side */
}

const ListingHeader = styled.h1`
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
  text-decoration: none;
  font-size: 2.4rem;
  font-weight: 800;
`;

const PostListing = ({ pageSize = 5, isInfinite = true, postEdges }) => {
  const [numPagesShown, setNumPages] = useState(pageSize);
  const [ref, inView] = useInView();

  if (isInfinite) {
    useEffect(() => {
      if (inView && postEdges.length > numPagesShown) {
        setNumPages(numPagesShown + pageSize);
      }
    }, [inView]);
  }

  const postList = postEdges.map(postEdge => ({
    path: postEdge.node.fields.slug,
    tags: postEdge.node.frontmatter.tags,
    cover: postEdge.node.frontmatter.cover,
    title: postEdge.node.frontmatter.title,
    date: postEdge.node.fields.date,
    excerpt: postEdge.node.excerpt,
    timeToRead: postEdge.node.timeToRead
  }));

  return (
    <MaxWidthBox maxWidth="70rem" m="auto">
      {/* Your post list here. */
      postList.slice(0, numPagesShown).map(post => (
        <StyledBox
          hoverable
          mb="4rem"
          p="3rem"
          css="min-height: 24rem;"
          key={post.title}
        >
          <article>
            <Flex>
              <Box width={2 / 3} pr="2rem">
                <Link
                  to={post.path}
                  key={post.path}
                  style={{ textDecoration: "none" }}
                >
                  <ListingHeader to={post.path}>{post.title}</ListingHeader>
                </Link>
                <Paragraph small>{post.excerpt}</Paragraph>
                <PostTags tags={post.tags} />
                <Flex justifyContent="flex-end">
                  <Info>
                    <FaClock /> {post.timeToRead} min read
                  </Info>
                  <Info>
                    <FaRegCalendarAlt />{" "}
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </Info>
                </Flex>
              </Box>
              <Box width={1 / 3}>
                <Img
                  style={{ height: "100%" }}
                  imgStyle={{ objectFit: "cover" }}
                  fluid={post.cover.childImageSharp.fluid}
                  alt={post.title}
                />
              </Box>
            </Flex>
          </article>
        </StyledBox>
      ))}
      <div ref={ref} />
    </MaxWidthBox>
  );
};

export default PostListing;
