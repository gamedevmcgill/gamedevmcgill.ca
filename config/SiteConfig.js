module.exports = {
  siteTitle: "GameDev McGill", // Site title.
  siteTitleShort: "GDM", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "GameDev McGill", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.jpg", // Logo used for SEO and manifest.
  siteUrl: "https://www.gamedevmcgill.ca", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "The Game Development Student Society of McGill University is a student-run club that empowers aspiring game developers (programmers, designers, artists, etc.) to hone their craft. Come join our club to collaborate, learn, and play with our members! Find out more at our info sessions at the beginning of each semester.", // Website description used for RSS feeds/meta description tag.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-64089703-2", // GA tracking ID.
  disqusShortname: "gdm", // Disqus shortname.
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
  copyright: "Copyright © 2019. GameDev McGill.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#FF0079", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
