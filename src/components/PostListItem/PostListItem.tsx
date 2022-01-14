import { Link } from 'gatsby';
import { take } from 'ramda';
import React from 'react';
import styled from '../styled';
import TagList from '../TagList/TagList';
import { Date, PostWrapper, Title } from './elements';
import PostListItemCoverImage from './PostListItemCoverImage';

type Props = {
  postNode: GatsbyTypes.PostNode;
  side: 'left' | 'right';
};

const PostListItem = ({ postNode, side }: Props) => {
  const {
    excerpt: autoExcerpt,
    frontmatter: { title, date, path, excerpt, tags = [] },
  } = postNode;

  return (
    <PostWrapper side={side}>
      <ThumbnailWrapper>
        <PostListItemCoverImage postNode={postNode} />
      </ThumbnailWrapper>
      <Metas side={side}>
        <Date>{date}</Date>
        <Title>
          <Link to={path}>{title}</Link>
        </Title>
        <TagList tags={take(2, tags)} />
      </Metas>
      <Dot />
    </PostWrapper>
  );
};

const ThumbnailWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 40px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.secondary};
`;

const Metas = styled.div<{ side: 'left' | 'right' }>`
  padding: 0 16px;
  background-color: ${({ theme }) => theme.background};

  @media (min-width: 875px) {
    width: 250px;
    text-align: ${({ side }) => (side === 'left' ? 'right' : 'left')};
  }
`;

const Dot = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 100%;
  opacity: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 875px) {
    display: none;
  }
`;

export default PostListItem;
