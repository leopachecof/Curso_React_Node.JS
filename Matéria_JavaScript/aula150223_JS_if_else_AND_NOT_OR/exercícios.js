/************EXERCÍCIOS***********/

// Exercício I
// Defina 3 variáveis com notas de 0 a 10. Calcule a média
// das três notas. Em seguida mostre no console o status do aluno:
//      Maior ou igual 7 = Aprovado
//      Entre 5 e 7 = Reforço
//      Menor que 5 = Reprovação

// Exercício II
// Simule a tabela do IMC com base no valor calculado
// no exercício anterior. Indique o status com base no valor do IMC.

// Exercício III: Defina um número a e um número b.
// Verifica qual o maior, ou menor, ou se são iguais!


// Exercício I
let nota1 = 2;
let nota2 = 6;
let nota3 = 7;

let media = (nota1 + nota2 + nota3)/3;
//console.log(media);
if (media >= 7) {
    console.log("Aprovado");
} else if (media > 7 || media >=5) {
    console.log("Reforço");
} else {
    console.log("Reprovado");
}

// Exercício II

let peso = 93;
let altura = 1.77;
let imc = peso / (altura*altura);

console.log(imc.toFixed(2));
if (imc < 18.5) {
    console.log("Abaixo do Peso");
 } else if (imc < 24.9) {
    console.log("Peso Normal");
 } else if (imc < 29.9) {
    console.log("Sobrepeso");
 } else if (imc < 34.9) {
    console.log("Obesidade Grau 1");
 } else if (imc < 39.9) {
    console.log("Obesidade Grau 2");
 } else if (imc > 40) {
    console.log("Obesidade Grau 3 ou Mórbida");
 }


// Exercício III

 let a = 14;
 let b = 4;

 if (a > b) {
    console.log("a é maior que b");
 } else if (b > a) {
    console.log("a é menor que b");
 } else {
    console.log("a é igual a b");
 }
 