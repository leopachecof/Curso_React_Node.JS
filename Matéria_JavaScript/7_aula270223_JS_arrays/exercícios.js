/************EXERCÍCIOS***********/

// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.
/*
let numeros = [5, 12, 16, 33, 8, 10, 6, 9, 15, 71];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    console.log(`${numeros[i]}`);
    soma += numeros[i];
    console.log(`${numeros[i]} e o valor atual da soma: ${soma}`);
}
console.log(`A soma final dos valores é de: ${soma}`);


console.log("----------------------------------------------");

// Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.

let notas = [7.5, 5.3, 8.0, 10.0, 7.1];
let media = 0;
for (let i = 0; i < notas.length; i++) {
    media += notas[i];
}
media = media / notas.length;
console.log(`O resultado da média é de: ${media}`);

console.log("----------------------------------------------");

// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.

let numeros1 = [5, 12, 16, 33, 8, 10, 6];
let maiorNumero = 0;
for (let i = 0; i < numeros1.length; i++) {
    if( numeros1[i] > maiorNumero){
        maiorNumero = numeros1[i];
    }
    
}
//console.log(`O maior número do Array é: ${maiorNumero}`);

console.log("----------------------------------------------");

// Exercício IV: Crie um array de frutas.
// Percorra e mostre o tamanho do nome de cada fruta.

let frutas = ["Morango", "Laranja", "Goiaba", "Uva", "Abacate"];
for (let fruta of frutas) {
    console.log(`O tamanho de letras da Fruta: ${fruta} é de ${fruta.length}`)
}
*/
console.log("------------------EXE 5----------------------------");

// Exercício V: Crie um array de 5 números aleatórios.
// Utilize o esquema Math.floor(Math.random() * 100) para gerar
// números entre 0 e 99.
// Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// apenas os números pares.
// Em seguida, mostre a soma de todos os números pares do array.
let numAleatorio = [];
let numPares = [];
for (let i = 0; i < 5; i++){
    numAleatorio.push(Math.floor(Math.random() * 100)); // Math.random (gera um num de 0 à 0.99)
} // Math.floor (arredonda para baixo.)

console.log(numAleatorio);

for (let i = 0; i < numAleatorio.length; i++) {
    if(numAleatorio[i] % 2 === 0){
        numPares.push(numAleatorio[i]);
    }
}
/*CORREÇÃO EXE 5
console.log(numPares);
for (let i = 0; i < pares.length; i++) {
    somaPares += pares[i];
} 
console.log(`A soma dos números pares: ${somaPares}`)


-----------------------------------------------------------

function exercicio5() {
  let numeros = [];

  for (let i = 0; i < 5; i++) {
    numeros.push(Math.floor(Math.random() * 100));
  }

  let pares = [];
  for (let num of numeros) {
    if (num % 2 === 0) {
      pares.push(num);
    }
  }

  let somaPares = 0;
  for (let par of pares) {
    somaPares += par;
  }

  console.log(somaPares);
}

*/

console.log("----------------------------------------------");
/*
// Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// se a extensão é .mp3 ou .wav (retorne true ou false)


function verificarTipoArquivo(nomeArquivo){
    if( nomeArquivo.endsWith(".mp3") || nomeArquivo.endsWith(".wav") ){
        return true
    } else{
        return false
    }
}
console.log(verificarTipoArquivo("Linkin Park - In The End.mp3"));

console.log("----------------------------------------------");

// Exercício VII: Crie uma função que extrai os dígitos verificadores
// de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois ultimos dígitos.

function digitoCPF(cpf){
    return cpf.slice(12, 14);

}
console.log(digitoCPF("123.456.789-10"))

console.log("------------------OUTRA FORMA----------------------------");

const extrairDigitosVerificadores = (cpf) => {
  const digitosVerificadores = cpf.slice(-2);
  return digitosVerificadores;
};

console.log(extrairDigitosVerificadores("056.985.990-23"));


console.log("----------------------------------------------");

// Exercício VIII: Crie uma função que inverte uma string.
// Retorna ela invertida. BATATA -> ATATAB

function inverterString(string){
    let stringReversa = string.reverse();
    return stringReversa
}
console.log(inverterString("BATATA"));

console.log("------------------OUTRA FORMA---------------------------");


function inverterString(string) {
  var stringInvertida = "";
  // do ultimo indice até 0
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
    console.log(stringInvertida);
  }
  return stringInvertida;
}

console.log(inverterString("BATATA"));

console.log("----------------------------------------------");

// Exercício IX: Crie uma função que mostra os elementos do array
// em ordem invertida. [1, 2, 3] -> [3, 2, 1]
const inverterNumber = (array) =>{
    // let array = [num1, num2, num3, num4];    
    array.reverse();
    console.log("A ordem invertida é: " + array);
    return array;
}
inverteArray([1,2,3,4]);





console.log("----------------------------------------------");
*/