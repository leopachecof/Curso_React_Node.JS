/************EXERCÍCIOS***********/

/*

*/

// Exercício I
//Crie um array de palavras, para cada palavra
// verifique se o tamanho é menor que 5, se for transforme em BATATA
// Caso contrário retorne a palavra original em caixa alta.

let palavras = ["bootcamp", "soulcode", "fullstack", "js", "html"];
let palavras2 = palavras.map((palavra) => {
    if (palavra.length < 5) {
        return "BATATA";
    } else {
        return palavra.toUpperCase();
    }
})

console.log(palavras2);

console.log("----------------");
// Exercício II





console.log("----------------");
