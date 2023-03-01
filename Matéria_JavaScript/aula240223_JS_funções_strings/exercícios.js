/************EXERCÍCIOS***********/

/*

*/


// Exercício I: Crie uma função que recebe 2 números e um operador (+, -, *, /)
// e faça a operação indicada entre os 2 números. Não tem retorno.

function calcular(a, b, operador) {
    if (operador === "+") {
        console.log(`${a} + ${b} = ${a + b}`);
    } else if (operador === "-") {
        console.log(`${a} - ${b} = ${a - b}`);
    } else if (operador === "*") {
        console.log(`${a} * ${b} = ${a * b}`);
    } else if (operador === "/") {
        console.log(`${a} / ${b} = ${a / b}`);
    } else {
        console.log("Operação não definido!");
    }
}
calcular(30, 10, "+");


console.log("-------ou---------");

function calculadora(num1, num2, operacao){
    switch(operacao){
        case "+": console.log(`${num1 + num2}`);
            break;
        case "-": console.log(`${num1 - num2}`);
            break;
        case "*": console.log(`${num1 * num2}`);
            break;
        case "/": console.log(`${num1 / num2}`);
            break;
        default: console.log("operador não definido");
    }
}
calculadora(2, 4, "*");

console.log("----------------");
// Exercício II

// Exercício II: Crie uma função que converte celsius em fahrenheit
// C = (F - 32) / 1.8
// Em seguida crie uma outra função (checarTemperatura) que recebe uma temperatura 
// como parâmetro:
// Caso esteja abaixo de 10: "Muito frio!"
// Esteja entre 11 e 15: "Clima bom!"
// Esteja entre 16 e 30: "Agradável..."
// Seja maior que 30: "Hell"
function toCelsius(tempF) {
    let tempC = (tempF - 32) / 1.8;
    return tempC;
  }
  
  let tempCidade = toCelsius(75);
  
  function checarTemperatura(temp) {
    if (temp < 11) {
      console.log("Muito frio!");
    } else if (temp >= 11 && temp < 16) {
      console.log("Clima bom!");
    } else if (temp >= 16 && temp < 31) {
      console.log("Agradável!");
    } else {
      console.log("Hell!");
    }
  }
  
  checarTemperatura(tempCidade);
  checarTemperatura(toCelsius(100));



console.log("----------------");

