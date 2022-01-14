import PostPreview from '../PostListItem';
import styled from '../styled';

type Props = {
  postEdges: GatsbyTypes.PostEdges;
};

export type PostEdge = GatsbyTypes.PostEdge;

function Posts({ postEdges: posts }: Props) {
  return (
    <PostsWrapper>
      <VerticalBar />
      {posts.map(({ node }, index) => {
        return (
          <PostPreview
            postNode={node}
            key={node.id}
            side={index % 2 === 0 ? 'left' : 'right'}
          />
        );
      })}
    </PostsWrapper>
  );
}

const PostsWrapper = styled.div`
  height: 100%;
  position: relative;
  max-width: 980px;
  margin: 0 auto;
  padding: 80px 0;
`;

const VerticalBar = styled.div`
  width: 32px;
  background-color: ${({ theme }) => theme.secondary};
  position: absolute;
  top: 160px;
  bottom: 160px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 30px;
  opacity: 0.5;

  @media (max-width: 875px) {
    display: none;
  }
`;

export default Posts;
