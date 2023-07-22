import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

function Courses() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const array = [
    { id: 1, title: "HTML 5" },
    { id: 2, title: "CSS 3" },
    { id: 3, title: "JAVASCRIPT" },
    { id: 4, title: "REACT" },
    { id: 5, title: "ANGULAR" },
    { id: 6, title: "GRAPHQL" },
    { id: 7, title: "NODE.JS" },
    { id: 8, title: "PHP" },
    { id: 9, title: "PYTHON" },
    { id: 10, title: "DJANGO" },
    { id: 11, title: "FLASK" },
  ];
  return (
    <Container className="">
      <Row xs={2} md={2} className="mb-2 ">
        <Col>
          <DropdownButton id="dropdown-basic-button" title="Filter Courses">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <Button className="float-end" variant="success" onClick={handleShow}>
            Add <i className="bi bi-plus"></i>
          </Button>
        </Col>
      </Row>
      <Row xs={1} md={4} lg={6}>
        {array.map((prod) => {
          return (
            <Card key={prod.id} className="p-2 mb-2">
              <Card.Img variant="top" src="https://placehold.co/80x80" />
              <Card.Body>
                <Card.Title>{prod.title.toUpperCase()}</Card.Title>
                <Card.Text>Some quick example text</Card.Text>
                <Row>
                  <Col>
                    <Button variant="primary">$$</Button>{" "}
                  </Col>
                  <Col>
                    <Button variant="success">BUY</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          );
        })}
      </Row>

      {/* MODAL */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Course</Modal.Title>
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
            <Form.Group className="mb-3" controlId="editPost.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="" autoFocus />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
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
    </Container>
  );
}

export default Courses;
