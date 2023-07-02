import express from "express";
// apollo server with express
import { ApolloServer } from "apollo-server-express";

// dotenv
import dotenv from "dotenv";
dotenv.config();

const app = express();

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const typeDefs = `#gql
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();

// apply express middlware to apolloServer
// applyMiddleware server connects ApolloServer to HTTP Framework i;e express

apolloServer.applyMiddleware({ app });

app.get("/", function (req, res) {
  res.json({
    data: "some response",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at PORT=${process.env.PORT}`);
  console.log(
    `graphql server is running at PORT=${process.env.PORT}${apolloServer.graphqlPath}`
  );
});
