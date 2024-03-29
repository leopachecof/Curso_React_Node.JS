import { Button, Form, Image } from "react-bootstrap";
import "./Login.css"

export function Login() {
  return (
    <div className="fundo">
      <div className="login">
        <Image className="background" src="https://img.freepik.com/fotos-gratis/paisagem-de-nevoeiro-matinal-e-montanhas-com-baloes-de-ar-quente-ao-nascer-do-sol_335224-794.jpg?t=st=1679424937~exp=1679425537~hmac=b4d24fe549e98817e4a468c538b5a385add35db40b0559acf44f78c3a7adc765" > 
        </Image>

        <Form className="arealogin">

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
      </div>
    </div>
  );
}
