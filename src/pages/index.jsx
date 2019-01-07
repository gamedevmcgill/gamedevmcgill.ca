import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Flex, Box } from "@rebass/grid";
import Sponsors from "../components/Sponsors/Sponsors";
import MaxWidthBox from "../components/Styled/MaxWidthBox";
import AbsoluteImage from "../components/Styled/AbsoluteImage";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Hero from "../../static/assets/hero.svg";
import Triangle from "../../static/assets/triangle.svg";
import H1 from "../components/Styled/H1";
import H2 from "../components/Styled/H2";
import Em from "../components/Styled/Em";
import StyledBox from "../components/Styled/StyledBox";
import Paragraph from "../components/Styled/Paragraph";
import Section from "../components/Styled/Section";
import Carousel from "../components/Carousel/Carousel";
import Events from "../components/Events/Events";
import Team from "../components/Team/Team";

const events = [
  {
    title: "McGameJam",
    image: "https://source.unsplash.com/random/800x600",
    description: "Hello"
  },
  {
    title: "Tutorials",
    image: "https://source.unsplash.com/random/800x600",
    description: "Hello"
  },
  {
    title: "Game Dev Social",
    image: "https://source.unsplash.com/random/800x600",
    description: "Hello"
  },
  {
    title: "Watch n Learn",
    image: "https://source.unsplash.com/random/800x600",
    description: "Hello"
  }
];

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <header>
          <AbsoluteImage
            src={Hero}
            top={0}
            left={0}
            imgWidth="100%"
            minWidth="120rem"
          />
          <Flex
            flexDirection="column"
            justifyContent="center"
            css={{ height: "60rem" }}
          >
            <MaxWidthBox maxWidth="50rem" ml="10rem">
              <H1>
                {/* eslint-disable-next-line */}
                {/* prettier-ignore */}A really <Em>catchy</Em> placeholder to
                get your attention.
              </H1>
            </MaxWidthBox>
          </Flex>
        </header>
        <MaxWidthBox maxWidth="100rem" m="0 auto">
          <Section>
            <H2>About</H2>
            <Flex flexWrap="wrap" alignItems="center">
              <StyledBox p="2rem" width={[1, 1, 1 / 2]}>
                <img
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%"
                  }}
                  src="https://source.unsplash.com/random/800x600"
                  alt="Random"
                />
              </StyledBox>
              <Box p="2rem" width={[1, 1, 1 / 2]}>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Paragraph>
              </Box>
            </Flex>
          </Section>
          <Section>
            <H2>Our Games</H2>
            <Flex flexWrap="wrap" alignItems="center">
              <Box p="2rem" width={[1, 1, 1 / 2]}>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Paragraph>
              </Box>
              <Box p="2rem" width={[1, 1, 1 / 2]}>
                <Carousel />
              </Box>
            </Flex>
          </Section>
          <Section css={{ position: "relative" }}>
            <H2>Club Events</H2>
            <Events events={events} />
            <AbsoluteImage
              src={Triangle}
              top="-20vh"
              left="-20vw"
              width="75%"
            />
          </Section>
          <Section>
            <H2>Blog</H2>
            <PostListing postEdges={postEdges} />
          </Section>
          <Section>
            <H2>Our team</H2>
            <Team
              members={[
                {
                  name: "Elie Harfouche",
                  position: "President",
                  game: "Maplestory",
                  portrait: "https://source.unsplash.com/random/300x300"
                },
                {
                  name: "Elie Harfouche",
                  position: "President",
                  game: "Maplestory",
                  portrait: "https://source.unsplash.com/random/300x300"
                },
                {
                  name: "Elie Harfouche",
                  position: "President",
                  game: "Maplestory",
                  portrait: "https://source.unsplash.com/random/300x300"
                },
                {
                  name: "Elie Harfouche",
                  position: "President",
                  game: "Maplestory",
                  portrait: "https://source.unsplash.com/random/300x300"
                }
              ]}
            />
          </Section>
          <Section>
            <H2>Sponsors</H2>
            <Flex flexWrap="wrap" justifyContent="center">
              <Sponsors
                sponsors={[
                  {
                    name: "Ubisoft",
                    logo:
                      "https://vignette.wikia.nocookie.net/logopedia/images/a/a0/Ubisoft_2017.svg/revision/latest?cb=20170622035823",
                    website: "https://www.ubisoft.com"
                  }
                ]}
              />
            </Flex>
          </Section>
        </MaxWidthBox>
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
