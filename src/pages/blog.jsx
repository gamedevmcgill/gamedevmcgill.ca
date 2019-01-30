import React, { Component } from "react";
import { graphql } from "gatsby";
import { Box } from "@rebass/grid";
import Helmet from "react-helmet";
import Header from "../components/Header/Header";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

class BlogPage extends Component {
  render() {
    const { data } = this.props;
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <Header title="Blog Posts" />
        <Box mt="-25rem">
          <PostListing postEdges={postEdges} />
        </Box>
      </Layout>
    );
  }
}

export default BlogPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
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
