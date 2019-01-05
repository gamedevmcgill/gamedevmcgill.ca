import React from "react";
import Slider from "react-slick";
import "./style.css";
import { Flex, Box } from "@rebass/grid";
import StyledBox from "../Styled/StyledBox";
import Title from "./Title";
import Subtitle from "./Subtitle";

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3, 4, 5]
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
          <StyledBox m="2rem 0.25rem">
            <article>
              <img
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%"
                }}
                src="https://source.unsplash.com/random/600x400"
                alt="Random"
              />
              <Flex justifyContent="space-around" m="1rem 0">
                <Box>
                  <Title>Lorem Ipsum</Title>
                  <Subtitle>by Hello World</Subtitle>
                </Box>
                <Flex alignItems="center">
                  <button type="button">See on itch.io</button>
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
