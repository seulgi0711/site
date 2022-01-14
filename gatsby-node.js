const { paginate } = require('gatsby-awesome-pagination');
const { forEach, uniq, filter, not, isNil, flatMap } = require('rambdax');
const path = require('path');
const { toKebabCase } = require('./src/helpers');

const pageTypeRegex = /src\/(.*?)\//;
const getType = (node) => node.fileAbsolutePath.match(pageTypeRegex)[1];

const pageTemplate = path.resolve(`./src/templates/PostTemplate/index.tsx`);
const indexTemplate = path.resolve(`./src/templates/Main/index.tsx`);
const tagsTemplate = path.resolve(`./src/templates/Tags/index.tsx`);

exports.createPages = ({ actions, graphql, getNodes }) => {
  const { createPage } = actions;
  const allNodes = getNodes();

  return graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              title
              tags
            }
            fileAbsolutePath
          }
        }
      }
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const {
      allMdx: { edges: mdxPages },
      site: { siteMetadata },
    } = result.data;

    const sortedPages = mdxPages.sort((pageA, pageB) => {
      const typeA = getType(pageA.node);
      const typeB = getType(pageB.node);

      return (typeA > typeB) - (typeA < typeB);
    });

    const posts = allNodes.filter(
      ({ internal, fileAbsolutePath }) =>
        internal.type === 'Mdx' && fileAbsolutePath.indexOf('/posts/') !== -1,
    );

    // Create posts index with pagination
    paginate({
      createPage,
      items: posts,
      component: indexTemplate,
      itemsPerPage: siteMetadata.postsPerPage,
      pathPrefix: '/',
    });

    // Create each markdown page and post
    forEach(({ node }, index) => {
      const previous = index === 0 ? null : sortedPages[index - 1].node;
      const next =
        index === sortedPages.length - 1 ? null : sortedPages[index + 1].node;
      const isNextSameType = getType(node) === (next && getType(next));
      const isPreviousSameType =
        getType(node) === (previous && getType(previous));

      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
        context: {
          type: getType(node),
          next: isNextSameType ? next : null,
          previous: isPreviousSameType ? previous : null,
        },
      });
    }, sortedPages);

    // Create tag pages
    const tags = filter(
      (tag) => not(isNil(tag)),
      uniq(flatMap((post) => post.frontmatter.tags, posts)),
    );

    forEach((tag) => {
      const postsWithTag = posts.filter(
        (post) =>
          post.frontmatter.tags && post.frontmatter.tags.indexOf(tag) !== -1,
      );

      paginate({
        createPage,
        items: postsWithTag,
        component: tagsTemplate,
        itemsPerPage: siteMetadata.postsPerPage,
        pathPrefix: `/tag/${toKebabCase(tag)}`,
        context: {
          tag,
        },
      });
    }, tags);

    return {
      sortedPages,
      tags,
    };
  });
};

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter!
    }

    type Frontmatter {
      title: String!
      author: String
      date: Date! @dateformat
      path: String!
      tags: [String!]
      excerpt: String
      coverImage: File @fileByRelativePath
    }
  `;
  createTypes(typeDefs);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  });
};
