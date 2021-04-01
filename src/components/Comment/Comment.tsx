import { Disqus } from 'gatsby-plugin-disqus';
import React from 'react';

type Props = {
  siteUrl: string,
  path: string,
  title: string,
};

const Comment = ({ siteUrl, path, title }: Props) => {
  const config = {
    url: `${siteUrl}${path}`,
    identifier: path,
    title,
  };
  return <Disqus config={config} />;
};

export default Comment;
