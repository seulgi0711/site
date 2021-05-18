import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<GatsbyTypes.SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          copyrights
          author
          logo {
            src
            alt
          }
          logoText
          defaultTheme
          postsPerPage
          siteUrl
        }
      }
    }
  `);

  return site!.siteMetadata!;
};
