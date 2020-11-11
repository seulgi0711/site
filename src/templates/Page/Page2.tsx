import { ThemeProvider } from 'emotion-theming';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { DarkSpace } from '../../components/elements';
import GlobalStyles from '../../components/GlobalStyles';
import Layout2 from '../../components/Layout2';
import Navigation2 from '../../components/Navigation2';
import SEO from '../../components/seo';
import { theme } from '../../components/styled';
import { Title, Wrapper } from './elements';

type Props = {
  data: any,
  pageContext: {
    next: any,
    previous: any,
  },
};

const BlogPostTemplate = ({ data, pageContext }: Props) => {
  const {
    frontmatter: { title, date, path, author, coverImage, excerpt, tags },
    excerpt: autoExcerpt,
    id,
    body,
  } = data.mdx;
  const { next, previous } = pageContext;

  console.log('next', next);
  console.log('previous', previous);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <SEO title={title} description={excerpt || autoExcerpt} />
        <Layout2>
          <Wrapper>
            <DarkSpace />
            <Title>{title}</Title>
            <MDXRenderer>{body}</MDXRenderer>
            <Navigation2
              previousPath={previous?.frontmatter?.path}
              previousLabel={previous?.frontmatter?.title}
              nextPath={next?.frontmatter?.path}
              nextLabel={next?.frontmatter?.title}
            />
          </Wrapper>
        </Layout2>
      </ThemeProvider>
    </>
  );
};

export default BlogPostTemplate;

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
