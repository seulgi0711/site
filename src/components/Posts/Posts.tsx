import React, { useEffect, useRef } from 'react';
import About from '../About';
import PostPreview from '../PostPreview';
import styled from '../styled';

type Props = {
  posts: any[],
};

const renderPost = ({ node }) => {
  const {
    id,
    excerpt: autoExcerpt,
    frontmatter: { title, date, path, author, coverImage, excerpt, tags },
  } = node;

  return (
    <PostPreview
      key={id}
      title={title}
      date={date}
      path={path}
      author={author}
      coverImage={coverImage}
      tags={tags}
      excerpt={excerpt || autoExcerpt}
    />
  );
};

function Posts({ posts }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    const handleWheel = event => {
      // event.preventDefault();
      // requestAnimationFrame(() => {
      //   node.scrollLeft += event.deltaY;
      // });
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
  background: ${({ theme }) => theme.lightBackground};
  color: ${({ theme }) => theme.lightColor};

  /* & > *&:not(:first-of-type) {
    margin-left: 40px;
  } */
`;

const DarkSpace = styled.div`
  background: ${({ theme }) => theme.darkBackground};
`;

const Bottom = styled.div`
  flex-wrap: nowrap;
  display: flex;
`;

const ScrollWrapper = styled.div`
  overflow-x: auto;
`;

export default Posts;
