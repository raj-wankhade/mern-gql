import auth from "../auth/auth.js";
import { authors } from "../resolvers/author.resolver.js";

const posts = async (_, args, context) => {
  await auth(context.req);
  return [
    {
      id: 1,
      author: authors.find((author) => author.id === 1),
      title: "Introduction to GraphQL",
      votes: 2,
    },
    {
      id: 2,
      author: authors.find((author) => author.id === 2),
      title: "Welcome to Meteor",
      votes: 3,
    },
    {
      id: 3,
      author: authors.find((author) => author.id === 2),
      title: "Advanced GraphQL",
      votes: 1,
    },
    {
      id: 4,
      author: authors.find((author) => author.id === 4),
      title: "Launchpad is Cool",
      votes: 7,
    },
  ];
};

const totalPosts = () => posts.length;

// Mutation
// parent or _
const newPost = (parent, args) => {
  args = args.input;
  // create a new post object
  const post = {
    id: posts.length++,
    authorId: authors.find((author) => author.id === args.authorId),
    title: args.title,
    votes: args.votes,
  };

  posts.push(post);

  return post;
};

const postsResolver = {
  Query: {
    posts,
    totalPosts,
  },
  Mutation: {
    newPost,
  },
};

export default postsResolver;
