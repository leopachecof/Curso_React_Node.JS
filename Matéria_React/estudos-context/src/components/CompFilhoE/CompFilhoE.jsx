

//hook useContext = capturar o valor que é fornecido por algum Provider
//3º passo import BatataContex, incluir a constante "const batata = useContex(BatataContex)" e altear a chamada de props.valor => para apenas "valor"

import { useContext } from "react";
import "./CompFilhoE.css";
import { BatataContext } from "../../contexts/BatataContext";

export function CompFilhoE() {

  const batata = useContext(BatataContext)

  return (
    <div className="filho-e">
      <h3>FILHO E</h3>
      <p>
        <b>Valor:</b>
        {batata}
      </p>
    </div>
  );
}
