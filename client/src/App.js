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
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import Courses from "./pages/Courses";

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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/courses",
        element: <Courses />,
        errorElement: "<h3> Product error page </h3>",
      },
      {
        path: "/forgot-password",
        element: <Register />,
      },

      {
        path: "/complete-registration",
        element: <CompleteRegistration />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("accessToken");

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        token: token,
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
