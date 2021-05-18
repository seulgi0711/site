import { isNil } from 'ramda';
import React, { useEffect, useRef } from 'react';
import About from '../About';
import PostPreview from '../PostListItem';
import styled from '../styled';

type Props = {
  postEdges: GatsbyTypes.PostEdges;
};

export type PostEdge = GatsbyTypes.PostEdge;

const renderPost = ({ node }: PostEdge) => {
  return <PostPreview postNode={node} key={node.id} />;
};

function Posts({ postEdges: posts }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (node === null) return;

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
      }

      requestAnimationFrame(() => {
        if (isNil(node)) return;

        node.scrollLeft += event.deltaY;
        node.scrollTop = 0;
      });
    };

    node.addEventListener('wheel', handleWheel);
    return () => {
      node.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <PostsWrapper ref={ref}>
      {/* <DarkSpace />
      <ScrollWrapper>
        <Bottom>
        </Bottom>
      </ScrollWrapper> */}
      <About />
      {posts.map(renderPost)}
    </PostsWrapper>
  );
}

const PostsWrapper = styled.div`
  padding-top: 50vh;
  height: 100%;
  position: relative;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  background: ${({ theme }) => theme.lightBackground};
  color: ${({ theme }) => theme.lightColor};

  /* & > *&:not(:first-of-type) {
    margin-left: 40px;
  } */
`;

export default Posts;
