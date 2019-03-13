import React from "react";
import Helmet from "react-helmet";
import { Box } from "@rebass/grid";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/Header/Header";
import PostListing from "../components/PostListing/PostListing";
import config from "../../config/SiteConfig";

export default class TagTemplate extends React.Component {
  render() {
    const {
      pageContext: { tag },
      data
    } = this.props;
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div>
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />

          <Header title={`Tagged: ${tag}`} />
          <Box m="10rem 0">
            <PostListing postEdges={postEdges} />
          </Box>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
