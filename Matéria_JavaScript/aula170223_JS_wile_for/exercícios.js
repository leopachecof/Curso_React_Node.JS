/************EXERCÍCIOS***********/

/*
Exercício I: Faça a tabuada do 5
1 x 5 = 5
2 X 5 = 10
...
10 x 5 = 50

*/

let contador = 1;
let acumulado = 5;
let resultado = 5;

while (contador <= 10) {
  console.log(contador + " X 5 = " + resultado);
  contador++;
  resultado = contador * acumulado;
}
console.log("--------OUTRA FORMA--------");

let mult = 1;

while (mult <= 10) {
   let resultado = mult * 5;
   console.log(`${mult} x 5 = ${resultado}`);
   mult++;
 }
console.log("---------------------------");




// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE)

let contador2 = 1;

while (contador2 <= 99) {
   if (contador2 % 2 == 1){
      console.log("Impar: " + contador2)
   }
   contador2++;
}

console.log("----------------");

// Exercícios III: Conte de 50 até 75

let cont3 = 50;

while (cont3 <= 75) {
   console.log(cont3);
   cont3++;
}

console.log("----------------");

// Exercícios IV: Fazer os mesmos exercícios com FOR

/*
Faça a tabuada do 5
1 x 5 = 5
2 X 5 = 10
...
10 x 5 = 50
*/

let resp = 0;

for (let mult2 = 1; mult2 <= 10; mult2++) {
   resp = mult2 * 5
   console.log(mult2 + " x 5 = " + resp);
}

console.log("----------OUTRA FORMA-----------------");

for (let mult3 = 1; mult3 <= 10; mult3++) {
   console.log(`5 x ${mult3} = ${mult3 * 5}`);
}


console.log("---------------------------");
//Vá do 1 até o 99 e mostre apenas os valores ímpares


for (let cont2 = 1; cont2 <= 100; cont2++) {
   if (cont2 % 2 !== 0){
   console.log(cont2);
   }
}

console.log("---------------------------");

//Conte de 50 até 75

for (let cont3 = 50; cont3 <=75; cont3++) {
   console.log(cont3);
}

console.log("-----------TESTAR COM BOOLEAN----------------");

for (let cont4 = 1; cont4 <=75; cont4++) {
   if (cont4 >= 50 && cont4 <= 75) {
      console.log(cont4);
   }
}

console.log("---------------------------");