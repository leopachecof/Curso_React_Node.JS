

let nomeDoProduto = "Bike";
let precoDoProduto = 1200;

let descontoDoProduto = 0;
let descontoValido = 0.10;
let precoFinal = 0

descontoDoProduto = precoDoProduto * descontoValido

if (descontoValido == 0.10) {
    precoFinal = precoDoProduto - descontoDoProduto;
    console.log(`Valor do produto: R$ ${precoDoProduto .toFixed(2)}`);
    console.log(`Valor do produto com desconto de 10%: R$ ${precoFinal.toFixed(2)}`);
} if (precoFinal > 1000) {
    precoFinal = precoFinal - 50;
    console.log(`Valor com desconto em compras acima de mil reais : R$ ${precoFinal.toFixed(2)}`);
} else {
    precoFinal;
    console.log(`Valor do produto sem desconto R$ ${precoFinal.toFixed(2)}`);
}

console.log("Preço final: " + precoFinal);
console.log("---------------------")

let lucroTotal = 0;
let valorTotalDoProduto = [];
let demanda = [10, 2, 1, 30, 5];

for (let cont = 0; cont < demanda.length; cont++) {
    let soma = demanda[cont] *  precoFinal;
    valorTotalDoProduto.push(soma);
    console.log(`O Cliente ${cont + 1} vai pagar ${valorTotalDoProduto[cont]}`);
}

for (let cont = 0; cont < demanda.length; cont++) {
    lucroTotal = lucroTotal + valorTotalDoProduto[cont];
}
console.log(`O lucro total é: ${lucroTotal}`);
