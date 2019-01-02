import * as React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import GlobalStyle from "./GlobalStyle";

const withThemeProvider = Component => props => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Component {...props} />
    </div>
  </ThemeProvider>
);

export default withThemeProvider;
