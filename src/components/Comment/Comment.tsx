import { map } from 'rambdax';
import React, { useEffect, useRef } from 'react';

const attrs = {
  src: 'https://utteranc.es/client.js',
  repo: 'seulgi0711/site',
  'issue-term': 'pathname',
  theme: 'github-light',
  crossorigin: 'anonymous',
  async: 'true',
};

const Comment = () => {
  const container = useRef<HTMLDivElement>();

  useEffect(() => {
    const scriptNode = document.createElement('script');
    map((val: string, name: string) => {
      scriptNode.setAttribute(name, val);
    }, attrs);
    container.current?.appendChild(scriptNode);
  }, []);

  return <div ref={container} />;
};

export default Comment;
