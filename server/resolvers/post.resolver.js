import { authors } from "../resolvers/author.resolver.js";

// example data
const posts = [
  { id: 1, authorId: 1, title: "Introduction to GraphQL", votes: 2 },
  { id: 2, authorId: 2, title: "Welcome to Meteor", votes: 3 },
  { id: 3, authorId: 2, title: "Advanced GraphQL", votes: 1 },
  { id: 4, authorId: 3, title: "Launchpad is Cool", votes: 7 },
];
const totalPosts = () => posts.length;

// Mutation
// parent or _
const newPost = (parent, args) => {
  console.log("args are", args);
  // create a new post object
  const post = {
    id: posts.length++,
    authorId: authors.find((author) => author.id === args.author),
    title: args.title,
    votes: args.votes,
  };

  posts.push(post);

  console.log("post is", post);
  return post;
};

const postsResolver = {
  Query: {
    posts: () => posts,
    totalPosts: totalPosts,
  },
  Mutation: {
    newPost,
  },
};

export default postsResolver;
