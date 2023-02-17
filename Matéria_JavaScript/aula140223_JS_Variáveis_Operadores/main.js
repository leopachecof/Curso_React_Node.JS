// console.log("Hello, World!")
// // comentário
// //**************VARIÁVEIS E OPERADORES****************

// let nomeCompleto; //camel case: segunda palavra com letra maiúscula

// nomeCompleto = "José Almir";
// console.log(nomeCompleto);
// let idade = 19;
// idade = 20;

// console.log(idade);
// console.log("Meu nome é "+ nomeCompleto + "e tenho "+ idade +" anos de idade!");

// const cpf = "000.000.000-00"
// console.log(cpf)

// //***********TIPOS***************
// let golsSofridos = 3; //number
// let chanceDerrota = 0.55; //number decimal
// let nomeTime = `Valência`; //string
// let patrocio; //underfined (sem valor)
// //Quando é True ou False é tipo Boolean

// //*****OPERADORES ARITMÉTICOS***********
// let soma = 200+100;
// let sub = 200-100;
// let mult = 200*3;
// let div = 200/2;
// let resto = 201%2;
// let expressao = (soma + sub) * div;

// console.log("A soma é " + soma +"!"); //Template de string = Interpolação de strings
// console.log(`A subtração é ${sub}!`); 
// console.log(mult);
// console.log(div);
// console.log(resto);
// console.log(expressao);

// //Outra utilização para aspas de crase é para quebra de linha:
// let mensagem = `A subtração é algo
// muito importante
// para todos nós!`;
// console.log(mensagem)


// //-----------INCREMENTO----------
// let i = 0;
// i = i + 1; // O novo valor de i é = 1
// i = i + 1; // O novo valor de i é = 2
// i = i + 1; // O novo valor de i é = 3
// console.log(i) // neste caso aqui será 3

// //-----------INCREMENTO----------
// i ++; // O novo valor de i somando 1 // neste caso aqui será 4
// console.log(i)

// //-----------DENCREMENTO----------
// i --; // O novo valor de i diminuindo 1 // neste caso aqui será 3
// console.log(i)

// //*****OPERADORES RELACIONAIS***********(>, <, >=, <=, ==, ===, !=, !==)
// let a = 3;
// let b = 5;

// console.log(a > b) // a é maior que b? false
// console.log(a < b) // a é menor que b? true
// console.log(b >= a) // b é maior ou igual que a? true
// console.log(a <= b) // a é menor ou igual que b? true
// console.log(a == b) // a é igual que b? false
// console.log(a != b) // a é maior que b? true
// console.log(a === b) // a é idêntico a b? false // estritamente igual, valor e tipo
// console.log(a !== b) // a é estritamente diferente a b? true // valor e tipo

//*****EXERCÍCIO********

let peso = 90;
let altura = 1.78;
let IMC;
IMC = peso / (altura**2) //elevado a 2, ou poderia ser (altura*altura)
console.log(`Seu IMC é de + ${IMC.toFixed(2)}`)

let r = 3;
const pi = 3.14;
let ac;
ac = pi * r * r
console.log(ac)

let circ;
circ = 2 * pi * r
console.log(circ)

let temp = 35;
let far;
far = temp * 1.8 + 32;
console.log(far)