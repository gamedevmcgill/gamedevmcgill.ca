import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../config/SiteConfig";
import "./b16-tomorrow-dark.css";

import Header from "../components/Header/Header";
import MaxWidthBox from "../components/Styled/MaxWidthBox";
import StyledBox from "../components/Styled/StyledBox";

export default class PostTemplate extends React.Component {
  render() {
    const {
      pageContext: { slug },
      data
    } = this.props;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <Header
            title={post.title}
            author={post.author}
            date={post.date}
            tags={post.tags}
            img="https://source.unsplash.com/random/1920x1080"
          />
          <MaxWidthBox maxWidth="80rem" m="0 auto 10rem">
            <StyledBox p="4rem 10rem" mt="-20rem">
              <article
                style={{
                  lineHeight: "1.75",
                  letterSpacing: "0.3px"
                }}
                dangerouslySetInnerHTML={{ __html: postNode.html }}
              />
            </StyledBox>
          </MaxWidthBox>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
        author
      }
      fields {
        slug
        date
      }
    }
  }
`;
