import { ThemeProvider } from 'emotion-theming';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import GlobalStyles from '../components/GlobalStyles';
import Layout from '../components/Layout2';
import { InfoBanner } from '../components/Layout2/elements';
import Navigation from '../components/Navigation2';
import PostPreview from '../components/PostPreview';
import SEO from '../components/seo';
import { theme } from '../components/styled';

const Tags = ({
  data,
  pageContext: { nextPagePath, previousPagePath, tag },
}) => {
  const {
    allMdx: { edges: posts },
  } = data;

  return (
    <>
      <SEO />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout>
          <InfoBanner>
            Posts with tag: <span>#{tag}</span>
          </InfoBanner>

          {posts.map(({ node }) => {
            const {
              id,
              excerpt: autoExcerpt,
              frontmatter: {
                title,
                date,
                path,
                author,
                coverImage,
                excerpt,
                tags,
              },
            } = node;

            return (
              <PostPreview
                key={id}
                title={title}
                date={date}
                path={path}
                author={author}
                tags={tags}
                coverImage={coverImage}
                excerpt={excerpt || autoExcerpt}
              />
            );
          })}

          <Navigation
            previousPath={previousPagePath}
            previousLabel="Newer posts"
            nextPath={nextPagePath}
            nextLabel="Older posts"
          />
        </Layout>
      </ThemeProvider>
    </>
  );
};

Tags.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }),
};

export const postsQuery = graphql`
  query($limit: Int!, $skip: Int!, $tag: String!) {
    allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
                fluid(maxWidth: 800) {
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

export default Tags;
