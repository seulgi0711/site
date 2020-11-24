const postCssPresetEnv = require(`postcss-preset-env`);
const postCSSNested = require('postcss-nested');
const postCSSUrl = require('postcss-url');
const postCSSImports = require('postcss-import');
const cssnano = require('cssnano');
const postCSSMixins = require('postcss-mixins');
require('@mapbox/rehype-prism');

module.exports = {
  siteMetadata: {
    title: `낙타의 블로그`,
    description: `함수형 프로그래밍에 관심이 많은 프런트엔드 개발자입니다.`,
    copyrights: '',
    author: `nakta`,
    logo: {
      src: '',
      alt: '',
    },
    logoText: '낙타의 블로그',
    defaultTheme: 'dark',
    postsPerPage: 5,
    showMenuItems: 2,
    menuMoreText: 'Show more',
    mainMenu: [
      {
        title: 'About',
        path: '/about',
      },
      {
        title: 'Showcase',
        path: '/showcase',
      },
      {
        title: 'Example',
        path: '/example',
      },
    ],
  },
  plugins: [
    `babel-preset-gatsby`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postCSSUrl(),
          postCSSImports(),
          postCSSMixins(),
          postCSSNested(),
          cssnano({
            preset: 'default',
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-hello-friend`,
        short_name: `hello-friend`,
        start_url: `/`,
        background_color: `#292a2d`,
        theme_color: `#292a2d`,
        display: `minimal-ui`,
        icon: `src/favicon/favicon-96x96.png`,
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-waves`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false,
              noIframeBorder: true,
            },
          },
          `gatsby-remark-smartypants`,
          'gatsby-remark-import-code',
        ],
        // rehypePlugins: [rehypePrism],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};
