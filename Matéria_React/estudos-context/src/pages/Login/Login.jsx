import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Login.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Login() {
const resultado = useContext(ThemeContext)
const temaEscuro = resultado.temaEscuro;

  return (
    <div className={temaEscuro ? "bg-dark text-white-50 p-5" : "bg-light text-dark p-5"}>
      <h1>Login</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  className={temaEscuro ? "bg-dark text-light border border-white  " : "bg-primary text-light"}variant="primary" type="submit">
        Login
      </Button>
    </Form>
   </div>
  );
}
