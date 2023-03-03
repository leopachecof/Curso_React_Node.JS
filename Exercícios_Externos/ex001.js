

//           Argumentos, parâmetros e default

//**********************Function declaration

// function escrevaNome (name, lastName) {
//     console.log(name, lastName);
// }

// escrevaNome(`Leo`, `Pacheco`)

//**********************Function expression************ (don't hoisting)

// const meuNome = function () {
//     console.log (`Leo`);
// }

// meuNome ()
//--------------------OTHER--------------------------
// const myFullName = function (name, lastName) {
    //     console.log (name, lastName);
    // }
    
    // myFullName (`Daniela`, `Lage`)
    
//--------------------OTHER--------------------------

// const myFunc = function (name = `Fulano`, lastName = `de Tal`) {
    //     console.log (`Oi, ${name} ${lastName}!`);
    // }
    
    // myFunc ()
    // myFunc (`Leo`, `Pacheco`)
    
//--------------------FUNÇÃO RETORNANDO VALORES--------------------------

// const double = function (number) {
//     const result = number * 2
//     return result
// }
// const resultFinal = double(6)
// console.log(resultFinal);

//--------------------FUNÇÃO RETORNANDO VALORES----------OTIMIZADO---------
// const double = function (number) {
//     return number * 2
// }

// console.log(double(6));

//--------------------IMPRIMINDO UMA FUNÇÃO QUE É O RESULTADO DE OUTRA FUNÇÃO-------
// const double = function (number) {
//     return number * 2
// }
// const result = double(4)

// const showResult = function (value) {
//     return `O valor é: ${value}`
// }

// console.log(showResult(result))

//--------------------OTHER--------------------------

// const calculo = function (num1, num2) {
//     return num1 / num2
// }

// const resultado = calculo (10, 2)

// const respostaFinal = function (ligacao) {
//     return `A divisão é : ${ligacao}!`
// }

// console.log(respostaFinal(resultado));


////////////////////////////////////////////////////////////////

/*

*/


////////////////////////////////////////////////////////////////

/*
Dobre o valor de uma velocidade através de uma função anônima.

let duplaVelocidade = function(velocidade) {
    return velocidade * 2
};
let novaVelocidade = duplaVelocidade(120);

console.log(novaVelocidade);

*/
