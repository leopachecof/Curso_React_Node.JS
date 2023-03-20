import { useState } from "react";
import "./CalculadoraIMC.css";


export function Correcao() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(-1);


  function calcularImc() {
    const resultado = peso / (altura * altura);
    setImc(resultado);
  }

  function limpar(){
    setPeso(0);
    setAltura(0);
    setImc(-1);
  }


  return (
    <div className="correcao">
      <h4>Correção:</h4>
      <h3>Calculadora de IMC</h3>
      <input
        type="number"
        placeholder="Digite o peso"
        onChange={(evento) => setPeso(evento.target.value)}
        value={peso}
      />
      <input
        type="number"
        placeholder="Digite a altura"
        onChange={(evento) => setAltura(evento.target.value)}
        value={altura}
      />
      <br />
      <button onClick={calcularImc}>Calcular</button>
      <hr />
      <button onClick={limpar}>Limpar</button>
      {(imc > -1) && <p>O seu IMC é: {imc.toFixed(2)}</p>}
    </div>
  );
}


// Capturando dados do input


// - onChange
// - Função para coletar o valor
// - Estado pra armazenar





