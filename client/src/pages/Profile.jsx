import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Profile() {
  return (
    <div className="d-flex justify-content-center">
      <div className="container px-4 mb-4">
        <div className="row gx-5 p-3">
          <h3>Profile</h3>
        </div>
        <Form>
          <Col xs={6} md={4}>
            <Image
              src="https://placehold.co/200x200/000000/FFF?text=profile"
              roundedCircle
            />
          </Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter full name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="numeric"
              placeholder="Enter mobile"
              maxLength={10}
              minLength={10}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Profile Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
}
