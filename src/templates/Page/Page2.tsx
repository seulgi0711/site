import { ThemeProvider } from 'emotion-theming';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
// import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Socials from '../../components/About/Socials';
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
              <BlogTitle>
                <BlogLink href="/">
                  <h1>Nakta's Dev Story</h1>
                </BlogLink>
                <div>Front-End Developer</div>
              </BlogTitle>
              <Title>{title}</Title>
              <div>{date}</div>
              <TagList tags={tags} />
            </TopContent>
          </DarkSpace>
          <Content>
            {coverImage && (
              <CoverImage fluid={coverImage.childImageSharp.fluid} />
            )}
            <MDXRenderer>{body}</MDXRenderer>
            <Navigation2
              previousPath={previous?.frontmatter?.path}
              previousLabel={previous?.frontmatter?.title}
              nextPath={next?.frontmatter?.path}
              nextLabel={next?.frontmatter?.title}
            />
            <ExploreMore>
              <div>
                다른 글 읽기 <a href="/">https://nakta.dev</a>
              </div>
              <SocialWrapper>
                <Socials />
              </SocialWrapper>
            </ExploreMore>
          </Content>
        </div>
      </ThemeProvider>
    </>
  );
};

const BlogTitle = styled.div`
  margin-bottom: 120px;
`;

const BlogLink = styled.a`
  text-decoration: none;
  border-bottom: 1px solid;
`;

const DarkSpace = styled.div`
  background: ${({ theme }) => theme.darkBackground};
  color: ${({ theme }) => theme.darkColor};
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 350px;
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
`;

const TopContent = styled(Content)`
  color: ${({ theme }) => theme.darkColor};
`;

const ExploreMore = styled.div`
  margin: 150px 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialWrapper = styled.div`
  margin-top: 20px;
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
