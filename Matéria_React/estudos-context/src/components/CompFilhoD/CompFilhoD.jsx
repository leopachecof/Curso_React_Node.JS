import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoD.css";


export function CompFilhoD() {

  const batata = useContext(BatataContext)
  return (
    <div className="filho-d">
      <h3>FILHO D</h3>
      <span>{batata}</span>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    );
}
// export default CompFilhoD;
