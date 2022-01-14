import GlobalStyles from '@/components/GlobalStyles';
import MenuBar from '@/components/MenuBar/MenuBar';
import PostList from '@/components/PostList';
import ProfileImage from '@/components/ProfileImage';
import SEO from '@/components/SEO2';
import styled, { theme } from '@/components/styled';
import { ThemeProvider } from 'emotion-theming';
import { graphql, Link } from 'gatsby';
import React from 'react';

type Props = {
  data: GatsbyTypes.PostsQuery;
  pageContext: {
    nextPagePath: string;
    previousPagePath: string;
  };
};

const Main = ({ data, pageContext }: Props) => {
  const { nextPagePath, previousPagePath } = pageContext;

  return (
    <>
      <SEO />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header>
          <Link to="/">
            <ProfileImage />
          </Link>
          <Title>
            <Link to="/">Nakta's Blog</Link>
          </Title>
          <Desc>Frontend Dev Story</Desc>
        </Header>
        <MenuBar />
        <Body>
          <PostList postEdges={data.allMdx.edges} />
        </Body>
      </ThemeProvider>
    </>
  );
};

export const postsQuery = graphql`
  query Posts($limit: Int!, $skip: Int!) {
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
                fixed(width: 150, height: 150, cropFocus: CENTER) {
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

const Header = styled.header`
  background: #244449;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 16px;
  color: #f8fcfd;
  &,
  a {
    text-decoration: none;
  }
`;

const Desc = styled.div`
  color: #a2865e;
  font-size: 21px;
  font-weight: bold;
`;

const Body = styled.section`
  background: #244449;
`;

export default Main;
