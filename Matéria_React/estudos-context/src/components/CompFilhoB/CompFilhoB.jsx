import { useContext } from "react";
import Toast from 'react-bootstrap/Toast';
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoB.css";


export function CompFilhoB() {

  const resultado = useContext(BatataContext)

  return (
  <div className="filho-b">
    <h3>FILHO B</h3>
    <h4><strong>{resultado}</strong></h4>
    
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">SoulCode</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>
        Acabou a pausa! Hode de codar.
      </Toast.Body>
    </Toast>
  </div>
 
  );
}


// export default CompFilhoB();