import React, { Component } from "react";
import styled from "styled-components";
import { Box } from "reflexbox/styled-components";
import Logo from "../../../static/logos/wordmark.svg";

import UserLinks from "../UserLinks/UserLinks";

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.black};
  min-height: 24rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

class Footer extends Component {
  render() {
    const { config } = this.props;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <FooterContainer className="footer">
        <Box width={[1, 1 / 2]} p="4rem">
          <img style={{ width: "40rem" }} src={Logo} alt="Footer logo" />
        </Box>
        <Box width={[1, 1 / 2]} p="4rem">
          <UserLinks config={config} labeled />
        </Box>
        <div>{copyright}</div>
      </FooterContainer>
    );
  }
}

export default Footer;
