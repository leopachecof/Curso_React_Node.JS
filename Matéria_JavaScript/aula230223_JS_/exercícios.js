

/***********EXERCÍCIO************/
console.log("--------Exercício I--------");

// Exercício I: Crie uma função para calcular o IMC,
// de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros
// que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO).

function imc(peso, altura) {
    // indicar se o aluno foi aprovado ou não
    let calc = peso / (altura * altura);
    console.log(`O IMC é ${calc.toFixed(2)}`);

    return calc;
}

let sujeito1 = imc(90, 1.70);
let sujeito2 = imc(40.0, 1.5);




console.log("--------Exercício II--------");
// Exercício II: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%

function porcentagem (num) {
    let p = num * 100;
    return `${p.toFixed(1)}%`;
}

let valorFormatado = porcentagem(0.456); // 75.0%
console.log(valorFormatado);






console.log("-------Exercício III---------");
// Exercício III: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA se ele é negativo (true ou false)
// ehNegativo(-2) ===> true

function ehNegativo(num) {
    let calc2 = num < 0;
    return calc2;
}

let calc3 = ehNegativo(-10);
console.log(calc3);

console.log("-------OU---------");

function esNegativo(num2) {
    if (num2 < 0) {
        return true;
    } else {
        return false;
    }
}

    console.log(esNegativo(-200));

console.log("-------OU---------");
    
    function hiNegativo(num3) {
        return num3 < 0;
    }
    console.log(hiNegativo(-200));






    console.log("-------Exercício IV---------");
// Exercício IV: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA o número formatado com notação monetária em R$ (BRL)
// Dica: use a https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

function conver(num4) {
    const reais = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num4);
    return reais;
}

console.log(conver(4500));







console.log("-------Exercícios V---------");
// Exercícios V: Crie uma função que conte até um número passado por parâmetro.
// Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000.
// OBS: Não possui retorno.

function contar(maximo) {
    for (let i = 0; i <= maximo; i++) {
        console.log(i);   
    }
}
console.log(contar(5));






console.log("-------Exercícios VI---------");

// Exercícios VI: Crie uma função que recebe um nome e sobrenome.
// RETORNA o nome completo como resultado.

function juntar(nome, sobrenome) {
    return nome + "" + sobrenome;
}
console.log(juntar("Leo", " Pacheco"));

console.log("-------OU---------");

function nomeCompleto(nome, sobrenome) {
    
}
console.log(juntar("Daniela", "Lage"));



console.log("-------Exercício VII---------");
// Exercício VII: Crie uma função para calcular
// a área de um circulo = PI * R * R
// Considere PI = 3.14, ou use Math.PI
function areaDoCirculo(raio) {
    return Math.PI * raio * raio;
}

console.log(areaDoCirculo(3));


console.log("-------Exercícios VIII---------");
// Exercícios VIII: Crie uma função que recebe a area de um circulo
// e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function nivel(area) {
    if(area <= 20) {
        return "Nível I";
    } else if (area <= 40) {
        return "Nível II";
    } else {
        return "Nível inválido";
    }
}

console.log(nivel(5));

