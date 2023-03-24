import { useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";


export function NavBar() {
const resultado = useContext(ThemeContext);
const temaEscuro = resultado.temaEscuro;
const alternar = resultado.alternar;

let iconeBtn = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png";
if (temaEscuro) {
  iconeBtn = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
}


  return (
    <Navbar 
    bg={temaEscuro ? "dark" : "success"}
    variant={temaEscuro ? "dark" : "light"}
    expand="sm">
      
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
            <Button variant="outline-light" onClick={alternar}>
              <img src={iconeBtn} width="16" />
              Alternar
            </Button>
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