import { ThemeProvider } from 'emotion-theming';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
// import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
// import { DarkSpace } from '../../components/elements';
import GlobalStyles from '../../components/GlobalStyles';
// import Layout2 from '../../components/Layout2';
import Navigation2 from '../../components/Navigation2';
import SEO from '../../components/seo';
import styled, { theme } from '../../components/styled';
import TagList from '../../components/TagList/TagList';
import { Title } from './elements';

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

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <SEO title={title} description={excerpt || autoExcerpt} />
        <div>
          <DarkSpace>
            <TopContent>
              <Title>{title}</Title>
              <div>{date}</div>
              <TagList tags={tags} />
              <CoverImage fluid={coverImage.childImageSharp.fluid} />
            </TopContent>
          </DarkSpace>
          <Content>
            <MDXRenderer>{body}</MDXRenderer>
            <Navigation2
              previousPath={previous?.frontmatter?.path}
              previousLabel={previous?.frontmatter?.title}
              nextPath={next?.frontmatter?.path}
              nextLabel={next?.frontmatter?.title}
            />
          </Content>
        </div>
      </ThemeProvider>
    </>
  );
};

const DarkSpace = styled.div`
  background: ${({ theme }) => theme.darkBackground};
  color: ${({ theme }) => theme.darkColor};
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  color: ${({ theme }) => theme.lightColor};

  @media (max-width: 684px) {
    margin-top: 0;
  }

  @media (max-width: 900px) {
    max-width: 660px;
  }
`;

const CoverImage = styled(Img)`
  border-radius: 8px;
  margin: 40px 0;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  max-height: 344px;
  max-width: 760px;
`;

const TopContent = styled(Content)`
  color: ${({ theme }) => theme.darkColor};
`;

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
            fluid(maxWidth: 760) {
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
