import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AuthHeader() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">MERN-GQL</Navbar.Brand>
          <Nav className="me-auto float-end">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AuthHeader;
