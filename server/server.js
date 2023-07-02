import express from "express";
// apollo server with express
import { ApolloServer } from "apollo-server-express";

// dotenv
import dotenv from "dotenv";
dotenv.config();

import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/index.js";

const app = express();

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
