import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Flex } from "@rebass/grid";
import MaxWidthBox from "../components/Styled/MaxWidthBox";
import AbsoluteImage from "../components/Styled/AbsoluteImage";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Hero from "../../static/assets/hero.svg";
import H1 from "../components/Styled/H1";
import Em from "../components/Styled/Em";

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <AbsoluteImage src={Hero} top={0} left={0} imgWidth="100%" minWidth="120rem" />
        <Flex flexDirection="column" justifyContent="center" css={{ height: "60rem" }}>
          <MaxWidthBox maxWidth="50rem" ml="10rem">
            <H1>
              {/* eslint-disable-next-line */}
              {/* prettier-ignore */}A really <Em>catchy</Em> placeholder to get
              your attention.
            </H1>
          </MaxWidthBox>
        </Flex>
        <div className="index-container">
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
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
