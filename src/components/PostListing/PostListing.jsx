import React from "react";
import { Link } from "gatsby";
import { Flex, Box } from "@rebass/grid";
import { FaClock, FaRegCalendarAlt } from "react-icons/fa";
import StyledBox from "../Styled/StyledBox";
import Paragraph from "../Styled/Paragraph";
import MaxWidthBox from "../Styled/MaxWidthBox";
import Info from "./PostInfoText";
import PostTags from "../PostTags/PostTags";

class PostListing extends React.Component {
  getPostList() {
    const { postEdges } = this.props;
    return postEdges.map(postEdge => ({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead
    }));
  }

  render() {
    const postList = this.getPostList();
    return (
      <MaxWidthBox maxWidth="70rem" m="auto">
        {/* Your post list here. */
        postList.slice(0, 3).map(post => (
          <StyledBox
            mb="4rem"
            p="3rem"
            css="
            min-height: 24rem;
          "
          >
            <article>
              <Flex>
                <Box width={2 / 3} pr="2rem">
                  <Link to={post.path} key={post.title}>
                    <h1>{post.title}</h1>
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
                  <img
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%"
                    }}
                    src={post.cover}
                    alt={post.title}
                  />
                </Box>
              </Flex>
            </article>
          </StyledBox>
        ))}
      </MaxWidthBox>
    );
  }
}

export default PostListing;
