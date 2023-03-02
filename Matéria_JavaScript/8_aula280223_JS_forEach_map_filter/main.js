
//***********ASSUNTO**************

/*
-----------------forEach, map -----------------
let numeros = [1, 2, 3];

function mostrarValor(valor) {
    console.log(valor)
}

//  for (let num of numeros) {
    //  mostrarValor(num);
    //  }
    
    
    //  forEach
    //Para cada elemento no array, executa a função
    //numeros.forEach (mostrarValor);
    
    numeros.forEach((numero) => {
        console.log(numero);
    });
    
    */
    console.log("----------------");
    // Aula 28.02
    // Tópicos: forEach, map
    
    let numeros = [1, 2, 3];
    
    function mostrarValor(valor) {
        console.log(valor);
    }
    
    // for (let num of numeros) {
        //   mostrarValor(num);
        // }
        
        // forEach
// Para cada elemento no array, executa a função
// numeros.forEach(mostrarValor);

numeros.forEach((numero) => {
    //   console.log(numero);
});  

// Exercício: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.
let soma = 0;

numeros.forEach((numero) => {
    soma += numero;
});

// console.log(`A soma é ${soma}`);

let nomes = ["Pedro", "Paulo", "João", "Lucas"];
let nomesCaixaAlta = [];

// Transformando os nomes do array em Caixa Alta
nomes.forEach((nome) => {
  nomesCaixaAlta.push(nome.toUpperCase());
});

let nomesCaixaAlta2 = nomes.map((nome) => {
  return nome.toUpperCase();
});

console.log(nomesCaixaAlta2);

//Map = aplica transformação para cada elemento
// retornando, gera um novo array
let nomesCaixaAlta3 = nome.map((nome) => {
    return nome.toUpperCase();
});


console.log("----------------");


// Filter = Aplica um teste em cada elemento e quem passar
// faz parte do novo array
let temps = [29, 5, 10, -4, 15, -20]; // Celsius
let tempsPositivas = temps.filter((temp) => {
  if (temp > 0) {
    return true; // t pode fazer parte do novo array
  } else {
    return false; // t não fará parte do novo array
  }
});

let tempsPositivas2 = temps.filter((temp) => temp > 0);

console.log(temps);
console.log(tempsPositivas);
console.log(tempsPositivas2);

// for (let t of temps) {
//   if (t > 0) {
//     tempsPositivas.push(t);
//   }
// }
// console.log(tempsPositivas);