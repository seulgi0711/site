import { Link } from 'gatsby';
import { startCase, toKebabCase } from '../../helpers';
import styled from '../styled';

type Props = {
  tags: string[];
};

function TagList({ tags = [] }: Props) {
  return tags.length === 0 ? null : (
    <TagListWrapper>
      {tags.map((tag) => (
        <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
          <Tag>#{startCase(tag)}</Tag>
        </Link>
      ))}
    </TagListWrapper>
  );
}

export const TagListWrapper = styled.div`
  margin-top: 10px;
  opacity: 0.5;
`;

export const Tag = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

export default TagList;
