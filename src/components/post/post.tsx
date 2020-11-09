import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';
import { toKebabCase } from '../../helpers';
import Navigation from '../navigation';
import {
  CoverImage,
  Meta,
  PostContent,
  PostWrapper,
  ReadMore,
  Tag,
  Tags,
  Title,
} from './elements';

const Post = ({
  title,
  date,
  path,
  coverImage,
  author,
  excerpt,
  tags,
  body,
  previousPost,
  nextPost,
}) => {
  const previousPath = previousPost && previousPost.frontmatter.path;
  const previousLabel = previousPost && previousPost.frontmatter.title;
  const nextPath = nextPost && nextPost.frontmatter.path;
  const nextLabel = nextPost && nextPost.frontmatter.title;
  return (
    <PostWrapper>
      <PostContent>
        <Title>{excerpt ? <Link to={path}>{title}</Link> : title}</Title>
        <Meta>
          {date} {author && <>— Written by {author}</>}
          {tags ? (
            <Tags>
              {tags.map(tag => (
                <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                  <Tag>#{tag}</Tag>
                </Link>
              ))}
            </Tags>
          ) : null}
        </Meta>

        {coverImage && <CoverImage fluid={coverImage.childImageSharp.fluid} />}

        {excerpt ? (
          <>
            <p>{excerpt}</p>
            <ReadMore to={path}>Read more →</ReadMore>
          </>
        ) : (
          <>
            <MDXRenderer>{body}</MDXRenderer>
            <Navigation
              previousPath={previousPath}
              previousLabel={previousLabel}
              nextPath={nextPath}
              nextLabel={nextLabel}
            />
          </>
        )}
      </PostContent>
    </PostWrapper>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  author: PropTypes.string,
  excerpt: PropTypes.string,
  body: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
};

export default Post;
