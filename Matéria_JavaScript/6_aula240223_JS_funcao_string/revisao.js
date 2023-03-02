
//***********REVISÃO**************

/*
----------------- -----------------
*/

// Exercício II: Crie uma função que converte fahrenheit em celsius
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
    
};
//console.log(tempCidade);
let tempCidade = toCelsius(75);

function checarTemperatura(tempCidade) {
    if (tempCidade > 30) {
        console.log(`A temperatura está em ${tempCidade}C°, ou seja... Hell!`);
    } else if (tempCidade >= 16 || tempCidade <=30 ) {
        console.log(`A temperatura está em ${tempCidade}C°, ou seja... Clima bom!`);     
    } else if (tempCidade >= 11 || tempCidade <=15 ){
        console.log(`A temperatura está em ${tempCidade}C°, ou seja... Agradável!`);      
    } else {
        console.log(`A temperatura está em ${tempCidade}C°, ou seja... Muito Frio!`);
    }
};
checarTemperatura();
