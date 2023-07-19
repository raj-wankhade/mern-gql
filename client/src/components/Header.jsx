import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
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
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link onClick={logout}>
                  <i className="bi bi-power"></i>
                </Nav.Link>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
              </>
            )}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">
                    <i className="bi bi-house"></i> Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/profile">
                    <i className="bi bi-person"></i> Profile
                  </Nav.Link>
                  <Nav.Link as={Link} to="/products">
                    <i className="bi bi-house"></i> Products
                  </Nav.Link>
                  <Nav.Link as={Link} to="/posts">
                    <i className="bi bi-house"></i> Posts
                  </Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-1"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
