import { ThemeProvider } from 'emotion-theming';
import { graphql } from 'gatsby';
import React from 'react';
import GlobalStyles from '../components/GlobalStyles';
import Posts from '../components/Posts';
import SEO from '../components/seo';
import styled, { theme } from '../components/styled';

type Props = {
  data: any,
  pageContext: {
    nextPagePath: string,
    previousPagePath: string,
  },
};

const Index = ({ data, pageContext }: Props) => {
  const { nextPagePath, previousPagePath } = pageContext;
  const {
    allMdx: { edges: posts },
  } = data;

  return (
    <>
      <SEO />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <DarkSpace />
          <Posts posts={posts} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export const postsQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            path
            author
            excerpt
            tags
            coverImage {
              childImageSharp {
                fixed(width: 320, height: 214) {
                  ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 320, maxHeight: 214) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const DarkSpace = styled.div`
  background: ${({ theme }) => theme.darkBackground};
  height: 50%;
  flex: none;
  position: fixed;
  height: 50vh;
  left: 0;
  right: 0;
  z-index: 1;
`;

export default Index;
