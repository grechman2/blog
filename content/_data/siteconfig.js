require("dotenv").config();

module.exports = {
    // Website title, shown in left sidebar and in page title
    title: "Vitaliy Hrechko",
    // Site URL to generate absolute URLs. Used across the board.
    url: process.env.URL || "http://localhost:8080",
    // Profile image for left sidebar
    image: "/assets/images/sidebar_profile.png",
    // Image alt text for left sidebar
    imageAlt: "Vitaliy Hretchko",
    // Author name, shown in left sidebar, and used in JSON-LD
    author: "Vitaliy Hretchko",
    // Site description, shown below site image (optional)
    description:
        "My diary on development (Just want to clarify things for myself)",
    // OpenGraph default image, in case you don't have an `image`
    // set in your Markdown frontmatter; relevant for social
    // sharing.
    openGraphDefaultImage: "/assets/images/sidebar_profile.png",
    // GitHub ID (optional, remove it not needed), used for link in the left sidebar
    socialGitHub: "grechman2",
    // LinkedIn ID  (optional, remove it not needed), used for link in the left sidebar
    socialLinkedIn: "vitaliy-grechko-30b68258",
    // Twitter ID  (optional, remove it not needed), used for link in the left sidebar, and for OpenGraph sharing information
    //socialTwitter: "none",
    // YouTube ID/Channel  (optional, remove it not needed), used for link in the left sidebar
    //socialYouTube: "none",
    // Google Analytics ID  (optional, remove it not needed), used for... well, Google Analytics
    //googleAnalytics: "YOUR_GA-ID",
    // Algolia-powered search  (optional, remove it not needed),
    // See: https://github.com/algolia/algoliasearch-netlify
    algoliaSearch: {
        // When enabled shows the search bar in the UI
        enabled: true,
        // You'll have to set this manually in your build settings.
        // The value comes from Algolia, and is either visible in the
        // UI for the Crawler Plugin or the Algolia Dashboard.
        appId: process.env.ALGOLIA_APP_ID,
        // You'll have to set this manually in your build settings.
        // The value comes from Algolia, and is either visible in the
        // UI for the Crawler Plugin or the Algolia Dashboard.
        searchApiKey: process.env.ALGOLIA_SEARCH_API_KEY,
        // You'll have to set this manually in your build settings.
        // The value comes from Algolia, and is either visible in the
        // UI for the Crawler Plugin or the Algolia Dashboard.
        siteId: process.env.ALGOLIA_SITE_ID,
        // Assuming that you deploy your "main" branch. Otherwise you
        // can either override or configure this (using process.env.HEAD)
        branch: "main"
    }
};
