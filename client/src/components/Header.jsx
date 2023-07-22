import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { auth } from "../firebase";

function Header() {
  const { state, dispatch } = useContext(AuthContext);
  const { user } = state;
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("accessToken");

        dispatch({
          type: "LOGGED_IN_USER",
          user: null,
        });
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          collapseOnSelect
          expand={expand}
          className="bg-body-tertiary me-auto  my-2 my-lg-0"
        >
          <Container fluid>
            <Navbar.Brand href="#">MERN-GQL</Navbar.Brand>
            <>
              <Form className="d-flex mb-1">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-1"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </>
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link onClick={logout}>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="tooldip">Signout</Tooltip>}
                  >
                    <i className="bi bi-power"></i>
                  </OverlayTrigger>
                </Nav.Link>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
              </>
            )}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  MERN-GQL
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/" className="d-flex">
                    <i className="bi bi-house vertical-align: middle; margin:auto"></i>
                    <span className="px-2">Home</span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/profile">
                    <i className="bi bi-house vertical-align: middle; margin:auto"></i>
                    <span className="px-2">Profile</span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/courses">
                    <i className="bi bi-house vertical-align: middle; margin:auto"></i>
                    <span className="px-2">Courses</span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/posts">
                    <i className="bi bi-house vertical-align: middle; margin:auto"></i>
                    <span className="px-2">Posts</span>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
