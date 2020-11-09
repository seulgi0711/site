import { ThemeProvider } from 'emotion-theming';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import GlobalStyles from '../components/GlobalStyles';
import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/seo';
import { theme } from '../components/styled';

const BlogPostTemplate = ({ data, pageContext }) => {
  const {
    frontmatter: { title, date, path, author, coverImage, excerpt, tags },
    excerpt: autoExcerpt,
    id,
    body,
  } = data.mdx;
  const { next, previous } = pageContext;

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO title={title} description={excerpt || autoExcerpt} />
          <Post
            key={id}
            title={title}
            date={date}
            path={path}
            author={author}
            coverImage={coverImage}
            body={body}
            tags={tags}
            previousPost={previous}
            nextPost={next}
          />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default BlogPostTemplate;

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    next: PropTypes.object,
    previous: PropTypes.object,
  }),
};

export const pageQuery = graphql`
  query($path: String) {
    mdx(frontmatter: { path: { eq: $path } }) {
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
      id
      body
      excerpt
    }
  }
`;
