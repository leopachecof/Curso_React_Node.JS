import "./CalculadoraIMC.css";
import {useState} from "react";

export function CalculadoraIMC() {
    //    [estado, função]    = valor do estado
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [tabela, setTabela] = useState("");

    console.log(altura, peso)
    
    function calcularIMC () {
        const imc = peso / (altura * altura);
        const formIMC = imc.toFixed(2);
        console.log(imc);
        setResultado(formIMC);


        if(formIMC < 18.5) {
            setTabela("Abaixo do peso."); 
        } else if(formIMC >= 18.5 && formIMC <= 24.9) {
            setTabela("Peso normal."); 
        } else if(formIMC >= 25 && formIMC <= 29.9) {
            setTabela("Sobrepeso."); 
        } else if(formIMC >= 30 && formIMC <= 34.9) {
            setTabela("Obesidade grau I."); 
        } else if(formIMC >= 35 && formIMC <= 39.9) {
            setTabela("Obesidade grau II."); 
        } else if(formIMC >= 40) {
            setTabela("Obesidade grau III."); 
        }
    }


    function obterAltura(evento) {
        const input = evento.target;
        const valor = input.value;
        setAltura(valor);
    }
    function obterPeso(evento) {
        const input = evento.target;
        const valor = input.value;
        setPeso(valor);
    }

    function limpar(){
        setPeso("");
        setAltura("");
        setResultado();
        setTabela("");
      }


    return (
   
    
        <div className="calculadora">
            <h1>Calculadora IMC</h1>
            <span>Altura (m)</span> <br />
            <input className="iptcalculadora_IMC" type="number" placeholder="Digite sua altura..." onChange={obterAltura} value={altura}/>
            <br /><br />
            <span>Peso (kg)</span> <br />
            <input className="iptcalculadora_IMC" type="number" placeholder="Digite seu peso..." onChange={obterPeso} value={peso}/>
            <br /><br /><br />
            <button className="btn_calculadora_IMC" onClick={calcularIMC}>Calcular</button><br /><br />
            <button className="btn_reset" onClick={limpar}>Resetar</button><br /><br />

            <h2>Seu IMC é de: {resultado}</h2>
            <h3>Classificação: {tabela}</h3>
        </div>

      
      
      )

    }


//IMC = peso / (altura x altura).
// IMC	Classificação
// Menor que 18,5	Magreza
// 18,5 a 24,9	Normal
// 25 a 29,9	Sobrepeso
// 30 a 34,9	Obesidade grau I
// 35 a 39,9	Obesidade grau II
// Maior que 40	Obesidade grau III

{/*
(setResultado < 18.5) {const tabelaIMC="magreza";}
(setResultado >= 18.5 && setResultado <= 24.9) {const tabelaIMC="normal";}
(setResultado >= 25 && setResultado <= 29.9) {const tabelaIMC="sobrepeso";}
(setResultado >= 30 && setResultado <= 34.9) {const tabelaIMC="Obesidade grau I";}
(setResultado >= 35 && setResultado <= 39.9) {const tabelaIMC="Obesidade grau II";}
(setResultado >= 40) {const tabelaIMC="Obesidade grau III";}






*/}
