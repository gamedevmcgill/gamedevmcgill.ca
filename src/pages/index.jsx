import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Helmet from "react-helmet";
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

import Photo from "../../static/assets/gamedev.jpg";
import Game from "../../static/assets/gamepad.svg";
import Class from "../../static/assets/class.svg";
import Social from "../../static/assets/laugh.svg";
import Other from "../../static/assets/dance.svg";

const events = [
  {
    title: "McGameJam",
    image: Game,
    description:
      "The 2nd largest video game hackathon in Quebec, where attendees have 48 hours to create a game based on a chosen theme."
  },
  {
    title: "Tutorials",
    image: Class,
    description:
      "Game development workshops of all levels, from introduction to game development to game engine architecture and computer graphics."
  },
  {
    title: "Game Dev Social",
    image: Social,
    description:
      "Monthly meetups where our members share the projects they've been working on and socialize with each other."
  },
  {
    title: "Other Stuff",
    image: Other,
    description:
      "We have miscellaneous events throughout the year where we watch game dev talks, go out together, and present our games to the public!"
  }
];

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const postEdges = data.posts.edges;
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
            imgWidth="100%"
            minWidth="120rem"
          />
          <AbsoluteImage
            src={PixelArt}
            top={0}
            left="50%"
            imgWidth="35%"
            maxWidth="40rem"
            minWidth="30rem"
          />
          <Flex
            flexDirection="column"
            justifyContent="center"
            css={{ height: "60rem" }}
          >
            <MaxWidthBox maxWidth="50rem" ml={["2rem", "10rem"]}>
              <H1>
                {/* eslint-disable-next-line */}
                {/* prettier-ignore */}A really <Em>catchy</Em> placeholder to
                get your attention.
              </H1>
              <AnchorLink offset="100" href="#about">
                <Button>See more</Button>
              </AnchorLink>
            </MaxWidthBox>
          </Flex>
        </header>
        <MaxWidthBox maxWidth="100rem" m="16rem auto 0">
          <Section id="about">
            <H2>About</H2>
            <Flex flexWrap="wrap" alignItems="center">
              <StyledBox p="2rem" width={[1, 1, 1 / 2]}>
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
              <Box p="2rem" width={[1, 1, 1 / 2]} alignSelf="flex-start">
                <Paragraph>
                  At Game Dev McGill, we require all members to keep working on
                  games every semester, whether they’re for personal projects or
                  made as part of game development events. Our own events
                  include internal monthly game jams, our yearly McGameJam, and
                  participating in Ubisoft’s GameLabs competition.
                </Paragraph>
              </Box>
              <Box p="2rem" width={[1, 1, 1 / 2]}>
                <Carousel />
              </Box>
            </Flex>
          </Section>
          <Section css={{ position: "relative" }} id="events">
            <H2>Club Events</H2>
            <Events events={events} />
            <AbsoluteImage
              src={Triangle}
              top="-30vh"
              left="-20vw"
              width="100%"
            />
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
            <Flex justifyContent="center">
              <Button>Interested in sponsoring?</Button>
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
            cover
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
          }
        }
      }
    }
  }
`;
