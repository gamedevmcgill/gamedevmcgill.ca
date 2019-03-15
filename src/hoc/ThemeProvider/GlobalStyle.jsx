import { createGlobalStyle } from "styled-components";
import { lighten } from "polished";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1.6rem;
  }

  blockquote {
    margin: 1.6rem 1.6rem 1.6rem 0;
    padding: 0 0 0 0.8rem;
    border-left: 0.4rem solid ${props => props.theme.colors.blue};
    color: ${props => lighten(0.5, props.theme.colors.black)};
    font-style: italic;
  }
`;

export default GlobalStyle;
