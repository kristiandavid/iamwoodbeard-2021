require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
      title: `Woodbeard`,
      titleTemplate: "%s | Woodbeard",
      description: `Hello there. I'm Kristian, aka Woodbeard, a woodworker from Canada.`,
      siteUrl: `https://www.iamwoodbeard.com`,
      image: "/logo.jpg",
      twitterUsername: "@iamwoodbeard",
      author: `@kristiandavid`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: contentfulConfig
  }, 
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-PT2RSCG",
      includeInDevelopment: true,
    },
  },
  {
    resolve: `gatsby-source-instagram-all`,
    options: {
      access_token: process.env.INSTAGRAM_TOKEN,
    }
  },
  "gatsby-plugin-image", 
  "gatsby-plugin-react-helmet", 
  "gatsby-plugin-sass",
  "gatsby-plugin-sitemap", 
  `@contentful/gatsby-transformer-contentful-richtext`,
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /assets/
      }
    }
  },
  "gatsby-plugin-sharp", 
  "gatsby-transformer-remark",
  "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};