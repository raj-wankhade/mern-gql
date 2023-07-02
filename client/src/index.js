import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

// run below to confirm the set up

// client
//   .query({
//     query: gql`
//       query {
//         posts {
//           authorId {
//             firstName
//           }
//           id
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
