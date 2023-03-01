

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

console.log("--------------EXERCÍCIOS 1-------------")

function multiply (a = 0, b = 0) {
    return a * b
}

console.log(multiply (5, 9));

console.log("--------------EXERCÍCIOS 2-------------")

const divide = function (x = 0, y = 0) {
    return x / y
}

console.log(divide(18, 3));

console.log("--------------EXERCÍCIOS 3-------------")

const log = function (value = `Você deve passar um valor com argumento`) {
    console.log(value);
}

for (let i = 0; i < 7; i++) {
    let count = i + 1
    log(`Esta é a ${count}ª vez que essa string é exibida.`);
}

