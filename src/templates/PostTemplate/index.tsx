import ProfileImage from '@/components/ProfileImage';
import { ThemeProvider } from 'emotion-theming';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
// import { MDXRenderer } from 'gatsby-plugin-mdx';
import Socials from '../../components/About/Socials';
import Comment from '../../components/Comment/Comment';
// import { DarkSpace } from '../../components/elements';
import GlobalStyles from '../../components/GlobalStyles';
// import Layout2 from '../../components/Layout2';
import Navigation2 from '../../components/Navigation2';
import SEO from '../../components/SEO2';
import styled, { theme } from '../../components/styled';
import TagList from '../../components/TagList/TagList';
import { Title } from './elements';

type Props = {
  data: any;
  pageContext: {
    next: any;
    previous: any;
  };
};

const PostTemplate = ({ data, pageContext }: Props) => {
  const {
    frontmatter: { title, date, path, author, coverImage, excerpt, tags },
    excerpt: autoExcerpt,
    id,
    body,
  } = data.mdx;
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;
  const { next, previous } = pageContext;

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <SEO
          postTitle={title}
          description={excerpt || autoExcerpt}
          keywords={tags}
        />
        <div>
          <TopContent>
            <Content>
              <BlogTitle>
                <div>
                  <BlogLink>
                    <Link to="/">Nakta's Blog</Link>
                  </BlogLink>
                  <Desc>Frontend Dev Story</Desc>
                </div>
                <Link to="/">
                  <ProfileImage />
                </Link>
              </BlogTitle>
            </Content>
          </TopContent>
          <Divider />
          <Content>
            <Title>{title}</Title>
            <div>{date}</div>
            <TagList tags={tags} />

            {coverImage && (
              <CoverImage fluid={coverImage.childImageSharp.fluid} />
            )}
            <MDXRenderer>{body}</MDXRenderer>
            <CommentWrapper>
              <Comment />
            </CommentWrapper>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BlogLink = styled.h1`
  margin: 0;
  margin-top: 16px;
  color: #f8fcfd;

  &,
  a {
    text-decoration: none;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  color: ${({ theme }) => theme.color};

  .anchor {
    margin-right: 0.5em;
  }

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

const TopContent = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
`;

const ExploreMore = styled.div`
  margin: 150px 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialWrapper = styled.div`
  margin-top: 20px;
  color: ${({ theme }) => theme.color};
`;

const CommentWrapper = styled.div`
  margin-top: 120px;
`;

const Desc = styled.div`
  color: #a2865e;
  font-size: 21px;
  font-weight: bold;
`;

const Divider = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.color};
  opacity: 0.5;
`;

export default PostTemplate;

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
            fluid(maxWidth: 760, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
      body
      excerpt
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
