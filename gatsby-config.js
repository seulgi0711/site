require('@mapbox/rehype-prism');

module.exports = {
  siteMetadata: {
    title: `낙타의 블로그`,
    description: `함수형 프로그래밍에 관심이 많은 프런트엔드 개발자입니다.`,
    copyrights: '',
    author: `nakta`,
    logo: {
      src: '',
      alt: '낙타의 블로그',
    },
    logoText: '낙타의 블로그',
    defaultTheme: 'dark',
    postsPerPage: 10000,
    siteUrl: 'https://nakta.dev/',
  },
  plugins: [
    `babel-preset-gatsby`,
    `gatsby-plugin-react-helmet`,
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
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
          `gatsby-remark-smartypants`,
          'gatsby-remark-import-code',
        ],
        // rehypePlugins: [rehypePrism],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/tag/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '263169242',
        head: true,
      },
    },
  ],
};
