import { Link } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import { take } from 'rambdax';
import React from 'react';
import styled from '../styled';
import TagList from '../TagList/TagList';
import {
  Meta,
  PostContent,
  PostWrapper,
  TagListWrapper,
  Title,
} from './elements';

type Props = {
  title: string,
  date: string,
  path: string,
  coverImage: {
    childImageSharp: {
      fixed: FixedObject,
    },
  },
  author: string,
  excerpt: string,
  tags: string[],
};

const Post = ({ title, date, path, coverImage, excerpt, tags }: Props) => {
  return (
    <PostWrapper>
      <PostContent>
        <Title>
          <Link to={path}>{title}</Link>
        </Title>
        <VerticalEllipsis>{excerpt}</VerticalEllipsis>
        <UpperSide>
          <Date>{date}</Date>
          <Meta>
            {tags && (
              <TagListWrapper>
                <TagList tags={take(2, tags)} />
              </TagListWrapper>
            )}
          </Meta>

          {/* {coverImage && (
            <ImageWrapper>
              <CoverImage fixed={coverImage.childImageSharp.fixed} />
            </ImageWrapper>
          )} */}
        </UpperSide>
      </PostContent>
    </PostWrapper>
  );
};

const ImageWrapper = styled.div`
  /* position: absolute;
  bottom: calc(100% + 70px); */
  width: 320px;
  height: 214px;
`;

const Date = styled.div`
  font-size: 14px;
`;

const VerticalEllipsis = styled.div`
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const UpperSide = styled.div`
  position: absolute;
  bottom: calc(100% + 80px);
  z-index: 1;
  color: ${({ theme }) => theme.darkColor};
`;

export default Post;
