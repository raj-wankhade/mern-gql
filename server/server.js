import express from "express";
// apollo server with express
import { ApolloServer } from "apollo-server-express";

// mongoose
import { mongoose } from "mongoose";

// dotenv
import dotenv from "dotenv";
dotenv.config();

import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/index.js";

import auth from "./auth/auth.js";

const app = express();

// db
const db = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("db connected");
  } catch (e) {
    console.log(e);
  }
};
// execute database connection
db();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return { req, res };
  },
});
await apolloServer.start();

// apply express middlware to apolloServer
// applyMiddleware server connects ApolloServer to HTTP Framework i;e express
apolloServer.applyMiddleware({ app });

app.get("/", auth, function (req, res) {
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
