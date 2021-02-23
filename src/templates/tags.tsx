import { ThemeProvider } from 'emotion-theming';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import About from '../components/About';
import GlobalStyles from '../components/GlobalStyles';
import { InfoBanner } from '../components/Layout2/elements';
import PostPreview from '../components/PostPreview';
import SEO from '../components/seo';
import styled, { theme } from '../components/styled';

const renderPost = ({ node }) => {
  const {
    id,
    excerpt: autoExcerpt,
    frontmatter: { title, date, path, author, coverImage, excerpt, tags },
  } = node;

  return (
    <PostPreview
      key={id}
      title={title}
      date={date}
      path={path}
      author={author}
      coverImage={coverImage}
      tags={tags}
      excerpt={excerpt || autoExcerpt}
    />
  );
};

const Tags = ({
  data,
  pageContext: { nextPagePath, previousPagePath, tag },
}) => {
  const {
    allMdx: { edges: posts },
  } = data;

  const tagInfo = (
    <TagInfoWrapper>
      <InfoBanner>Posts with tag: #{tag}</InfoBanner>
    </TagInfoWrapper>
  );

  return (
    <>
      <SEO />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <DarkSpace />
          <PostsWrapper>
            <About appendDescription={tagInfo} />
            {posts.map(renderPost)}
          </PostsWrapper>
        </Wrapper>
        {/* <Layout>
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
        </Layout> */}
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

const PostsWrapper = styled.div`
  padding-top: 50vh;
  height: 100%;
  position: relative;
  display: flex;
  overflow-x: auto;
  background: ${({ theme }) => theme.lightBackground};
  color: ${({ theme }) => theme.lightColor};

  /* & > *&:not(:first-of-type) {
    margin-left: 40px;
  } */
`;

const TagInfoWrapper = styled.div`
  margin-top: 40px;
  font-size: 18px;
`;

export default Tags;
