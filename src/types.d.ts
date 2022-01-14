declare namespace GatsbyTypes {
  type PostEdges = GatsbyTypes.PostsQuery['allMdx']['edges'];
  type PostEdge = PostEdges[0];
  type PostNode = PostEdge['node'];
}
