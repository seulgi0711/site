import { Link } from 'gatsby';
import { take } from 'ramda';
import TagList from '../TagList/TagList';
import VerticalEllipsis from '../VerticalEllipsis';
import {
  Date,
  Meta,
  PostContent,
  PostWrapper,
  Title,
  UpperSide,
} from './elements';
import PostListItemCoverImage from './PostListItemCoverImage';

type Props = {
  postNode: GatsbyTypes.PostNode;
};

const PostListItem = ({ postNode }: Props) => {
  const {
    excerpt: autoExcerpt,
    frontmatter: { title, date, path, excerpt, tags = [] },
  } = postNode;

  return (
    <PostWrapper>
      <PostContent>
        <Title>
          <Link to={path}>{title}</Link>
        </Title>
        <VerticalEllipsis>{excerpt || autoExcerpt}</VerticalEllipsis>
        <UpperSide>
          <Date>{date}</Date>
          <Meta>
            <TagList tags={take(2, tags)} />
          </Meta>
          <PostListItemCoverImage postNode={postNode} />
        </UpperSide>
      </PostContent>
    </PostWrapper>
  );
};

export default PostListItem;
