import { useEffect, useState } from "react";
import "./CalculadoraIMC.css";


export function DesafioEfeito() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(-1);

useEffect(() => {
  const resultado = peso / (altura * altura);
  setImc(resultado); 

}, [peso, altura]);

  // function calcularImc() {
  //   const resultado = peso / (altura * altura);
  //   setImc(resultado);
  // }

  function limpar(){
    setPeso(0);
    setAltura(0);
    setImc(-1);
  }


  return (
    <div className="correcao">
      <h4>Desafio:</h4>
      <h3>Calculadora de IMC com efeito</h3>
      <span>Digite seu peso:</span><br />
      <input
        type="number"
        placeholder="Digite o peso"
        onChange={(evento) => setPeso(evento.target.value)}
        value={peso}
      />
      <br /><br />
      <span>Digite sua altura:</span><br />
      <input
        type="number"
        placeholder="Digite a altura"
        onChange={(evento) => setAltura(evento.target.value)}
        value={altura}
      />
      <br /><br />
      {/* <button onClick={calcularImc}>Calcular</button> */}
      <br /><br />
      <button onClick={limpar}>Limpar</button>
      {(imc > -1) && <p>O seu IMC é: {imc.toFixed(2)}</p>}
      {/* <p>O seu IMC é: {imc !== Infinity && imc.toFixed(2)}</p> */}
      {/* {(imc !== Infinity && !isNaN(imc)) && <p>O seu IMC é: {imc.toFixed(2)}</p>} */}
    </div>
  );
}


// Capturando dados do input


// - onChange
// - Função para coletar o valor
// - Estado pra armazenar





