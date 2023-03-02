/************EXERCÍCIOS***********/

/*
// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.


// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.
*/

// Exercício I
let idade = 34;
let dinheiro = 10;
let carteira = dinheiro;


if (idade >=18 && dinheiro >= 20) {
   console.log("Você pode comprar bebidas")
   carteira = dinheiro - 20
   console.log(`Agora você tem ${carteira} reais.`)   
} else {
   console.log("Você Não pode comprar bebidas")   
}

console.log("----------------");
// Exercício II

let sal = 450;

if (sal < 500) {
   sal = sal + 50; //sal += 50
} else if (sal >= 500 && sal <= 1000) {
   sal = sal + 25; //sal += 25
} else {
   console.log("Não houve aumento");
   console.log("----------------");
}
   console.log(`Salário atual: ${sal}`);

   console.log("----------------");

// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)


let numero = 7;

switch (numero) {
   case 1:
      console.log("Domingo");
      break;
   case 2:
      console.log("Segunda");
      break;
   case 3:
      console.log("Terça");
      break;
   case 4:
      console.log("Quarta");
      break;
   case 5:
      console.log("Quinta");
      break;
   case 6:
      console.log("Sexta");
      break;
   case 7:
      console.log("Sábado");
      break;
   default:
      console.log("Não existe!" )

}
console.log("----------------");
// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.

let comida = "chocolate";

switch (comida) {
   case "batata":
      console.log("Humm, adoro");
      break;
   case "carne":
      console.log("Humm, adoro");
      break;
   case "chocolate":
      console.log("Humm, adoro");
      break;
   case "pizza":
      console.log("As vezes");
      break;
   case "sanduíche":
      console.log("As vezes");
      break;
   default:
      console.log("Quero não!"); 
}

console.log("----------------");

switch (comida) {
   case "batata":
   case "carne":
   case "chocolate":
      console.log("Humm, adoro");
      break;
   case "pizza":
   case "sanduíche":
      console.log("As vezes");
      break;
   default:
      console.log("Quero não!"); 
}

/************OU COM IF e ELSE***************/
console.log("----------------");
if (comida === "batata" || comida === "carne" || comida === "chocolate") {
   console.log("Humm, adoro");
} else if (comida === "pizza" || comida === "sanduíche") {
   console.log("As vezes");
} else {
   console.log("Quero não!"); 
}


console.log("----------------");

// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.

console.log("-------primeira forma---------");
let num = 10;
let resto = num % 2;

if (resto > 0) {
   console.log("O número é impar");
} else {
   console.log("O número é par");
}

console.log("-----detalhe do zero-------");

if (num === 0) {
   console.log("O número é zero");
} else if (resto > 0) {
   console.log("O número é impar");
} else {
   console.log("O número é par");
}
console.log("-------outro jeito---------");


if (num === 0) {
   console.log("O número é zero");
} else if (num % 2 === 0) {
   console.log("O número é par");
} else {
   console.log("O número é impar");
}