import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

import Table from "react-bootstrap/Table";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (error) return <p>{error.message}</p>;

  if (loading) return <Loader />;

  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="editPost.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editPost.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <h3>
        <span>Posts</span>
      </h3>
      <Table responsive striped bordered>
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
                    <Button
                      variant="primary"
                      size="sm"
                      active
                      onClick={handleShow}
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    &nbsp;
                    <Button variant="danger" size="sm" active>
                      <i className="bi bi-trash" variant="danger"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Posts;
