import GlobalStyles from '@/components/GlobalStyles';
import PostList from '@/components/PostList';
import SEO from '@/components/SEO2';
import { theme } from '@/components/styled';
import { ThemeProvider } from 'emotion-theming';
import { graphql } from 'gatsby';
import { DarkSpace, Wrapper } from './elements';

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
        <Wrapper>
          <DarkSpace />
          <PostList postEdges={data.allMdx.edges} />
        </Wrapper>
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

export default Main;
