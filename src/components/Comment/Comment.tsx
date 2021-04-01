import { Disqus } from 'gatsby-plugin-disqus';
import React from 'react';

type Props = {
  path: string,
  title: string,
};

const Comment = ({ path, title }: Props) => {
  const config = {
    url: path,
    identifier: path,
    title,
  };
  return <Disqus config={config} />;
};

export default Comment;
