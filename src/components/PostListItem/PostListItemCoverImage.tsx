import Img from 'gatsby-image';
import { isNil } from 'ramda';
import React from 'react';
import styled from '../styled';

type Props = {
  postNode: GatsbyTypes.PostNode;
};

const PostListItemCoverImage = ({ postNode }: Props) => {
  const {
    frontmatter: { coverImage },
  } = postNode;

  return isNil(coverImage?.childImageSharp?.fixed) ? null : (
    <StyledImage fixed={coverImage?.childImageSharp?.fixed!} />
  );
};

const StyledImage = styled(Img)`
  width: 100% !important;
  height: 150px !important;
`;

export default PostListItemCoverImage;
