module.exports = {
  siteTitle: "Game Dev McGill", // Site title.
  siteTitleShort: "GA Starter", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Game Dev McGill", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://vagr9k.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Game Development Student Society @ McGill University.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Game Development", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userLinks: [
    {
      label: "facebook",
      url: "https://facebook.com/gamedevmcgill",
    },
    {
      label: "github",
      url: "https://github.com/gamedevmcgill",
    },
    {
      label: "itch.io",
      url: "https://gamedevmcgill.itch.io/",
    },
    {
      label: "email",
      url: "mailto:gamedev@mcgilleus.ca",
    }
  ],
  copyright: "Copyright © 2019. Game Dev McGill.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#FF0079", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
