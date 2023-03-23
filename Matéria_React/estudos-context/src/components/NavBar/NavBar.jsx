import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export function NavBar() {
  return (
    <Navbar bg="success" expand="lg">
      <Container fluid>
        <Navbar.Brand>App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
           	<Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/perfil">
              Perfil
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
           	{/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Perfil</Nav.Link>
            <Nav.Link href="#home">Login</Nav.Link> */}
            <Button variant="outline-light">Alternar</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


/*
import { Container, Nav, Navbar } from "react-bootstrap";

export function NavBar() {
  return (
    <Navbar bg="success" expand="lg">
      <Container fluid>
        <Navbar.Brand>App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
           	<Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Perfil</Nav.Link>
            <Nav.Link href="#home">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
*/