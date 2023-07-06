import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Posts from "./components/Posts";

import { AuthProvider } from "./context/authContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AppLayout from "./AppLayout";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: "<h3> error page </h3>",
    children: [
      {
        path: "/",
        element: <Posts />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </ApolloProvider>
);
