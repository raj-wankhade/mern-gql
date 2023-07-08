import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Posts from "./pages/Posts";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
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
