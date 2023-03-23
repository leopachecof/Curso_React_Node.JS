import { useState } from "react";
import { CompFilhoA } from "../CompFilhoA/CompFilhoA";
import { CompFilhoB } from "../CompFilhoB/CompFilhoB";
import { BatataContext } from "../../contexts/BatataContext";

import "./CompPai.css";

export function CompPai() {
  const [batata, setBatata] = useState("batata");

  function repetir() {
    setBatata(batata + "a");
  }

  // 2º passo - importar a const "BatataContext" que tras o "provider" depois puxa o '<BatataContext.Provider value={valor a ser colocado}
  // também se coloca todos os filhos para dentro dessa tag para ligar os caminhos dos filhos.
  return (
    <div className="pai">
      <h3>PAI</h3>
      <button className="btn btn-dark" onClick={repetir}>Repetir</button>
      {/* a batata abaixo é saída do valor, é mostragem da tela */}
      <p>
        <b>Valor:</b>
        {batata}
      </p>

      {/* a inclusão dos filhos A e B (que são todos filhos diretos) dentro do Provider, fornece "value" apara todos na hierarquia*/}
      {/* a batata abaixo é entrada de valor */}
      <BatataContext.Provider value={batata}>
        <CompFilhoA />
        <CompFilhoB />
      </BatataContext.Provider>
    </div>
  );

  // <CompFilhoA valor={batata}/>
  // <CompFilhoB />

}
