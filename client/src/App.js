import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./pages/Posts";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CompleteRegistration from "./pages/auth/CompleteRegistration";
import AppLayout from "./AppLayout";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { AuthContext } from "./context/authContext";
import { useContext } from "react";
import Home from "./pages/Home";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: "<h3> error page </h3>",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
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
      {
        path: "/complete-registration",
        element: <CompleteRegistration />,
      },
    ],
  },
]);

function App() {
  const { state } = useContext(AuthContext);
  const authLink = setContext((_, { headers }) => {
    const token = state && state.user ? state.user.token : null;
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        token: token ? `${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    // uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router}></RouterProvider>
    </ApolloProvider>
  );
}

export default App;
