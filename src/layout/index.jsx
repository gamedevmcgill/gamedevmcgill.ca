import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";
import withThemeProvider from "../hoc/ThemeProvider/withThemeProvider";
import Footer from "../components/Footer/Footer";

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
        <Footer config={config} />
      </div>
    );
  }
}

export default withThemeProvider(MainLayout);
