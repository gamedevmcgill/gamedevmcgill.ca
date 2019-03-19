import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Helmet from "react-helmet";
import MediaQuery from "react-responsive";
import Typed from "react-typed";
import { graphql, Link } from "gatsby";
import { Flex, Box } from "@rebass/grid";

import Carousel from "../components/Carousel/Carousel";
import Team from "../components/Team/Team";
import Navbar from "../components/Navbar/Navbar";
import Events from "../components/Events/Events";

import Sponsors from "../components/Sponsors/Sponsors";
import MaxWidthBox from "../components/Styled/MaxWidthBox";
import AbsoluteImage from "../components/Styled/AbsoluteImage";
import H1 from "../components/Styled/H1";
import H2 from "../components/Styled/H2";
import Em from "../components/Styled/Em";
import StyledBox from "../components/Styled/StyledBox";
import Paragraph from "../components/Styled/Paragraph";
import Section from "../components/Styled/Section";
import Button from "../components/Styled/Button";

import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../config/SiteConfig";

import Hero from "../../static/assets/hero.svg";
import PixelArt from "../../static/assets/pixel-art.png";
import Triangle from "../../static/assets/triangle.svg";

import strings from "../constants/header-strings";
import events from "../constants/events";

import Photo from "../../static/assets/gamedev.jpg";

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const postEdges = data.posts.edges;
    const gameEdges = data.games.edges;
    const games = gameEdges.map(edge => edge.node);
    const { executives } = data.execs.frontmatter;
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <Navbar />
        <header style={{ position: "relative" }}>
          <AbsoluteImage
            src={Hero}
            top={0}
            left={0}
            minHeight="80rem"
            minWidth="100%"
          />
          <AbsoluteImage
            src={PixelArt}
            top="6rem"
            left="50%"
            imgWidth="35%"
            maxWidth="40rem"
            minWidth="30rem"
          />
        </header>
        <MaxWidthBox maxWidth="90rem" m="auto">
          <Flex flexDirection="column">
            <MaxWidthBox maxWidth="50rem" m="20rem 0 30rem" p="1rem">
              <H1>
                {"At GDM, we build "}
                <br />
                <Em>
                  <Typed
                    strings={strings}
                    typeSpeed={40}
                    backSpeed={30}
                    backDelay={500}
                    smartBackspace
                    loop
                  />
                </Em>
              </H1>
              <AnchorLink offset="100" href="#about">
                <Button>See more</Button>
              </AnchorLink>
            </MaxWidthBox>
          </Flex>
          <Section id="about">
            <H2>About</H2>
            <Flex flexWrap="wrap" alignItems="center">
              <StyledBox p="2rem" mr="5%" width={[1, 1, 0.45]}>
                <img
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%"
                  }}
                  src={Photo}
                  alt="Members showing off a VR game"
                />
              </StyledBox>
              <Box p="2rem" width={[1, 1, 1 / 2]}>
                <Paragraph>
                  We are Game Dev McGill, the game development student society
                  of McGill University. We are a group of students that are
                  passionate about creating games and enjoy learning new aspects
                  of game development. We hold events to fuel the creativity of
                  our members and provide them with the resources to improve
                  their game development skills. We welcome all students
                  regardless of experience level!
                </Paragraph>
              </Box>
            </Flex>
          </Section>
          <Section id="games">
            <H2>Our Games</H2>
            <Flex flexWrap="wrap" alignItems="center">
              <Box p="2rem" width={[1, 1, 1 / 2]} alignSelf="center">
                <Paragraph>
                  At Game Dev McGill, we require all members to keep working on
                  games every semester, whether they’re for personal projects or
                  made as part of game development events. Our own events
                  include internal monthly game jams, our yearly McGameJam, and
                  participating in Ubisoft’s GameLabs competition.
                </Paragraph>
              </Box>
              <Box p="2rem" width={[1, 1, 1 / 2]}>
                <Carousel games={games} />
              </Box>
            </Flex>
          </Section>
          <Section css={{ position: "relative" }} id="events">
            <H2>Club Events</H2>
            <Events events={events} />
            <MediaQuery maxWidth="160rem">
              <AbsoluteImage
                src={Triangle}
                top="-70vh"
                left="-40vw"
                width="140%"
              />
            </MediaQuery>
          </Section>
          <Section id="blog">
            <H2>Blog</H2>
            <PostListing postEdges={postEdges} isInfinite={false} />
            <Flex justifyContent="center">
              <Link to="/blog">
                <Button>See more posts</Button>
              </Link>
            </Flex>
          </Section>
          <Section id="team">
            <H2>Our team</H2>
            <Team members={executives} />
          </Section>
          <Section id="sponsor">
            <H2>Sponsors</H2>
            <Flex flexWrap="wrap" justifyContent="center" mb="8rem">
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
            {/* <Flex justifyContent="center">
              <Button>Interested in sponsoring?</Button>
            </Flex> */}
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
    posts: allMarkdownRemark(
      limit: 3
      sort: { fields: [fields___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
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
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 300
                  duotone: { highlight: "#00ff99", shadow: "#000066" }
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
          }
        }
      }
    }
    execs: markdownRemark(fileAbsolutePath: { regex: "/executives/" }) {
      frontmatter {
        executives {
          name
          position
          game
          portrait {
            publicURL
            childImageSharp {
              fluid(
                maxWidth: 200
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    games: allItchioGame(limit: 10) {
      edges {
        node {
          url
          user {
            display_name
            url
          }
          title
          cover_url
        }
      }
    }
  }
`;
