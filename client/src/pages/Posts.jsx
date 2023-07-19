import Table from "react-bootstrap/Table";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Button from "react-bootstrap/Button";
import Loader from "../components/Loader";

const GET_POSTS = gql`
  query {
    posts {
      author {
        firstName
        id
      }
      title
      id
    }
  }
`;

function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (error) return <p>{error.message}</p>;

  if (loading) return <Loader />;

  return (
    <Table responsive striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Post</th>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.posts.map((post, index) => {
            return (
              <tr key={index}>
                <td>1</td>
                <td>{post.id}</td>
                <td>{post.author && post.title}</td>
                <td>{post.author && post.author.firstName}</td>
                <td>
                  <Button variant="primary" size="sm" active>
                    <i className="bi bi-pencil"></i>
                  </Button>{" "}
                  <Button variant="secondary" size="sm" active>
                    <i className="bi bi-trash" variant="danger"></i>
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default Posts;
