import React from "react";
import Slider from "react-slick";
import "./style.css";
import { Flex, Box } from "@rebass/grid";
import StyledBox from "../Styled/StyledBox";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Button from "../Styled/Button";

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.games
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { items } = this.state;
    return (
      <Slider {...settings}>
        {items.map(i => (
          <StyledBox
            m="2rem 0"
            key={i}
          >
            <article>
              <img
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%"
                }}
                src={i.cover_url}
                alt={i.title}
              />
              <Flex justifyContent="space-between" m="0.8rem 0 1.2rem" p="0rem 2rem">
                <Box>
                  <Title>{i.title}</Title>
                  <Subtitle>
                    by&nbsp;
                    <a href={i.user.url}>
                      {i.user.display_name || i.user.username}
                    </a>
                  </Subtitle>
                </Box>
                <Flex alignItems="center">
                  <a href={i.url} target="_blank" rel="noopener noreferrer">
                    <Button secondary>See on itch.io</Button>
                  </a>
                </Flex>
              </Flex>
            </article>
          </StyledBox>
        ))}
      </Slider>
    );
  }
}

export default SimpleSlider;
