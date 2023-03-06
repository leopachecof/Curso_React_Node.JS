////////////////////////////////////////////////////////////////////////////////       1.1 - 1
/************EXERCÍCIOS***********/

/*
Crie uma variável que armazene uma temperatura em Fahrenheit, e re-
alize a conversão para Celsius. A equação para realizar a conversão é:

C =
F − 32
1.8



function convertC (tempF) {
    let tempC = (tempF - 32) / 1.8
    console.log(tempC);
    return tempC
};

convertC(75);

*/
////////////////////////////////////////////////////////////////////////////////        1.1 - 2

// Crie duas variáveis nome e sobrenome. Crie uma nova variável chamada
// nomeCompleto e realize a concatenação de nome e sobrenome com
// template strings.

/*


function juntarNome (nome, sobrenome) {
    console.log(`O nome completo é ${nome} ${sobrenome}`);
}

juntarNome("Leo" , "Pacheco")

*/

/*
/////////////////////////////////////////////////////////////////////////////           1.1 - 3
// Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectiva-
// mente: 3, 2, 1, 4 e 5.
let n1 = 5;
let n2 = 5;
let n3 = 5;
let n4 = 5;
let n5 = 5;

let p1 = 3;
let p2 = 2;
let p3 = 1;
let p4 = 4;
let p5 = 5;

let mediaPonderada = ((n1 * p1) + (n2 * p2) + (n3 * p3) + (n4 * p4) + (n5 * p5)) / (p1 + p2 + p3 + p4 + p5);
//let mediaPonderada = (75 / 15 );
console.log(mediaPonderada.toFixed(2));

*/

///////////////////////////////////////////////////////////////////////////             1.1 - 4

/*
Crie duas variáveis que representam as dimensões (em km) de um terreno: comprimento e largura. Calcule a área deste terreno, em seguida converta para hectares. Nota: 1 km2 equivale a 100 hectares.

function tamanho (comp, larg) {
    let area2 = comp * larg
    console.log(area2);
    let converHectare = area2 * 100
    console.log(`O tamanho do terreno em são de ${converHectare} hectares.`);
    return converHectare;
}

tamanho(5, 10)
*/
///////////////////////////////////////////////////////////////////////////             1.1 - 5
/*
Crie uma variável que armazena uma temperatura em Kelvin. Converta
para Celsius. A equação é:

C = K − 273


function convertC2 (tempK) {
    let tempC = tempK - 273
    console.log(`A temperatura convertida é de ${tempC}° Celcius.`);
    return tempC
};

convertC2(305);
*/

///////////////////////////////////////////////////////////////////////////                1.2 - 1
/*
Crie três variáveis: a, b e c. Estas variáveis armazenam números. Exiba
qual destes números é o maior.

function verificar(d, e, f) {
    let numeros2 = [d, e, f];
    let maiorNum1 = numeros2[0];
    for (let i = 0; i < numeros2.length; i++) {
        if (numeros2[i] > maiorNum1) {
            maiorNum1 = numeros2[i];
        };
    }
    console.log(`O maior número é o ${maiorNum1}.`);
}
verificar(23, 567, 2)


function exercicio3(a, b, c) {
    let numeros1 = [a, b, c];
        let maiorNumero = numeros1[0];
        for (let i = 0; i < numeros1.length; i++) {
            if (numeros1[i] > maiorNumero) {
                maiorNumero = numeros1[i];
            }
        }
        console.log(`O maior número do Array é: ${maiorNumero}`);
    }
    exercicio3(34, 58, 17)
    */

///////////////////////////////////////////////////////////////////////////                1.2 - 2
/*
Crie três variáveis que representam os três lados de um triângulo. Aplica
a seguinte regra para definir se o triângulo é possível: Se a soma de dois
lados é maior que o terceiro lado.


function ladosTriangulo(a, b, c) {
    let lado1 = (a + b)/2
    let lado2 = (b + c)/2
    let lado3 = (c + a)/2
    
    if (c < lado1) {
        console.log(`Triângulo não possível, pois o lado ${c} é menor que a soma de ${b} + ${a}.`);
    } else if (a < lado2) {
        console.log(`Triângulo não possível, pois o lado ${b} é menor que a soma de ${c} + ${a}.`);
    } else if (b < lado3) {
        console.log(`Triângulo não possível, pois o lado ${a} é menor que a soma de ${c} + ${a}.`);
    } console.log(`Parabéns, você tem um triângulo.`);
};

ladosTriangulo(15, 15, 15);

*/

///////////////////////////////////////////////////////////////////////////                1.2 - 3
/*
Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior
que 130) mostre uma mensagem de aviso.


function verificarIdade (idade)  {
    if (idade <= 0 || idade >= 130){
        console.log(`Idade inválida!`);
    } else {
        console.log(`Sua idade é de ${idade} anos.`);
    }
}

verificarIdade(15)
*/

///////////////////////////////////////////////////////////////////////////                1.2 - 4
/*
Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte
regra para aplicar ajustes salariais: Caso não possua dependentes não
realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o
salário. Caso seja acima de 5 aumentar em 40% o salário.

function ajusteSal (salario, quantidadeDependentes) {
    if (quantidadeDependentes > 5) {
        salario = salario * 1.40
        console.log(`O seu salário sofreu ajuste de 40% e foi para ${salario} reais`);
    } else if (quantidadeDependentes >= 1){
        salario = salario * 1.30
        console.log(`O seu salário sofreu ajuste de 30% e foi para ${salario} reais`);
    } else {
        console.log(`O seu salário não sofreu ajuste e continua no valor de ${salario} reais`);
    }
}

ajusteSal(1000, 6)

*/

///////////////////////////////////////////////////////////////////////////                1.2 - 5
/*
Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 -
Segunda, ... 7 -Sábado). Com base no valor indique se é final de semana
ou dia de útil.


function indicadorFds (numero3){
    switch(numero3) {
        case 1:
            console.log("Domingo, é final de semana.");
            break;
        case 2:
            console.log("Segunda, é dia útil.");
            break;
        case 3:
            console.log("Terça, é dia útil.");
            break;
        case 4:
            console.log("Quarta, é dia útil.");
            break;
        case 5:
            console.log("Quinta, é dia útil.");
            break;
        case 6:
            console.log("Sexta, é dia útil.");
            break;
        case 7:
            console.log("Sábado, é final de semana.");
        break;
        default:
            console.log("Esse dia não é considerado da semana.");
            break;
        }
    }
    
    indicadorFds (7)
    */

///////////////////////////////////////////////////////////////////////////                1.2 - 6
/*
Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando:
Caso 1) É um número divisível por 4, mas não é divisível
por 100.
Caso 2) É um número divisível por 4, por 100 e por 400.


let ano = 0;

function verificarAnoBissexto(ano) {
    if (ano % 4 === 0 && ano % 100 !== 0) {
        console.log(`O ano ${ano} é Bissexto`);
    } else if (ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0) {
        console.log(`O ano ${ano} é Bissexto`);
    } else {
        console.log(`O ano ${ano} não é Bissexto`);
    }
}
verificarAnoBissexto(2028);
verificarAnoBissexto(2023);
verificarAnoBissexto(1965);
verificarAnoBissexto(2000);
*/

///////////////////////////////////////////////////////////////////////////                1.3 - 1
/*
Defina uma variável para armazenar um caractere e determine se é uma
vogal ou uma consoante. Use um switch-case para implementar a lógica.


function verificaVogal(letra) {
  switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      console.log("Vogal");
      break;
    default:
      console.log("Consoante");
      break;
  }
}

verificaVogal("k");
verificaVogal("a");
verificaVogal("f");
verificaVogal("h");
verificaVogal("i");

*/

///////////////////////////////////////////////////////////////////////////                1.3 - 2
/*   

Defina uma variável para armazenar um mês do ano (em número) e imprima o
nome do mês correspondente. Use um switch-case para implementar a lógica.



let mesAno = 0;

function verificarMesAno(mes) {
    switch (mes) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break;
        case 12:
            console.log("Dezembro");
            break;
        default:
            console.log("Este número não representa um mês");
            break;
    }
}
*/

/* verificarMesAno(1);
verificarMesAno(3);
verificarMesAno(4);
verificarMesAno(6);
verificarMesAno(0);
verificarMesAno(1); */

///////////////////////////////////////////////////////////////////////////                1.3 - 3
// Defina uma variável para armazenar um número de 1 a 12 e imprima
// o número de dias correspondente ao mês. Use um switch-case para
// implementar a lógica. Considere que fevereiro tem 28 dias em anos não
// bissextos.

/* let mes= 0;

function verificarMes (mes, ano) {
    switch (mes) {
        case 1:
            console.log(`Este número é Janeiro e tem 31 dias!`);
            break;
        case 2:
            if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 4 === 0 && ano % 100 === 0 || ano % 400 === 0)) {
                console.log(`Opa! Esse ano Fevereiro e tem 29 dias, pois é ano Bissexto!`)
            } else {
                console.log(`Este número é Fevereiro e tem 28 dias!`)
            };
            break;
        case 3:
            console.log(`Este número é Março e tem 31 dias!`);
            break;
        case 4:
            console.log(`Este número é Abril e tem 30 dias!`);
            break;
        case 5:
            console.log(`Este número é Maio e tem 31 dias!`);
            break;
        case 6:
            console.log(`Este número é Junho e tem 30 dias!`);
            break;
        case 7:
            console.log(`Este número é Julho e tem 31 dias!`);
            break;
        case 8:
            console.log(`Este número é Agosto e tem 31 dias!`);
            break;
        case 9:
            console.log(`Este número é Setembro e tem 30 dias!`);
            break;
        case 10:
            console.log(`Este número é Outubro e tem 31 dias!`);
            break;
        case 11:
            console.log(`Este número é Novembro e tem 30 dias!`);
            break;
        case 12:
            console.log(`Este número é Dezembro e tem 31 dias!`);
            break;
        default:
            console.log(`Opa! Este número não representa um mês!`);
            break;
    }
}

verificarMes(1, 2024);
verificarMes(2, 2023);
verificarMes(2, 2024);
verificarMes(3, 2022);
verificarMes(7, 2024);
verificarMes(10, 2023); */

///////////////////////////////////////////////////////////////////////////                1.3 - 4
// Defina uma variável para armazenar um número de 1 a 4 e imprima o
// nome da estação do ano correspondente. Use um switch-case para implementar a lógica.
/* 
function verificarEstacao (estacao) {
    switch (estacao) {
        case 1:
            console.log("Primavera");
            break;
        case 2:
            console.log("Verão");
            break;
        case 3:
            console.log("Outono");
            break;
        case 4:
            console.log("Inverno");
            break;
        default:
            console.log("Este número não corresponde a uma estação do ano.");
            break;
    }
}

verificarEstacao(1);
verificarEstacao(3);
verificarEstacao(2);
verificarEstacao(4); */

///////////////////////////////////////////////////////////////////////////                1.3 - 5

// Defina uma variável para armazenar uma nota (de 0 a 10) e imprima a
// menção correspondente. Use um switch-case para implementar a lógica.
// Considere as seguintes faixas de notas: de 0 a 4 - Insuficiente, de
// 5 a 6 - Regular, de 7 a 8 - Bom, de 9 a 10 - Excelente.

/* function verificarNota(nota) {
  switch (Math.floor(nota)) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      console.log(`Nota ${nota.toFixed(2)}, Insuficiente`);
      break;
    case 5:
    case 6:
      console.log(`Nota ${nota.toFixed(2)}, Regular`);
      break;
    case 7:
    case 8:
      console.log(`Nota ${nota.toFixed(2)}, Bom`);
      break;
    case 9:
    case 10:
      console.log(`Nota ${nota.toFixed(2)}, Excelente`);
      break;
    default:
        console.log(`${nota.toFixed(2)} é um número Inválido!`);
  };
};

verificarNota(7);
verificarNota(5);
verificarNota(6);
verificarNota(8);
verificarNota(9);
verificarNota(5.5);
verificarNota(-5);
verificarNota(15);
verificarNota(9.45455); */

///////////////////////////////////////////////////////////////////////////                1.4 - 1

/* Use um laço while para imprimir na tela todos os números pares de 2 a 10. */
/* let num = 0;
while (num <= 10) {
    if (num % 2 == 0) {
        console.log(num);
    };
    num ++;
};
 */

///////////////////////////////////////////////////////////////////////////                1.4 - 2

/* Use um laço for para imprimir na tela a tabuada do 7 (de 1 a 10). */

/* let calc = 0;
while (calc <= 10) {
    let result = calc * 7
    console.log(`${calc} x 7 = ${result}`);
    calc ++;
} */

// AGORA FAZER COM FOR


/* 
for (let i = 0; i <= 10; i++) {
    let calc2 = i * 7
    console.log(`7 X ${i} = ${calc2}`);
}

 */

///////////////////////////////////////////////////////////////////////////                1.4 - 3

/* Use um laço for para imprimir na tela a sequência de Fibonacci até o
décimo termo. 
0 1 2 3 4 5 6
0 1 1 2 3 5 8
*/
/* let soma= 0;
let anterior = 0;
let proximo = 1;

for (let i = 0; i < 10; i++) {
    soma = anterior + proximo;
    anterior = proximo;
    proximo = soma;
    
    console.log(anterior);
} */

///////////////////////////////////////////////////////////////////////////                1.4 - 4
/* Mostre a seguinte figura com utilização de laços:
*
**
***
****
***** */
/* let text = "";
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j ++) {
        text += "*";
    }
    text += "\n"
}
console.log(text);
 */
///////////////////////////////////////////////////////////////////////////                1.4 - 5
/* Escreva um programa que use um laço for para imprimir na tela os números
de 10 a 1 (em ordem decrescente). */

/* for (let i = 10; i >= 1; i--) {
    console.log(`${i}`);
} */
///////////////////////////////////////////////////////////////////////////                1.4 - 6
// ostre apenas os números ímpares de 1 até 1000.]

/* for (let i = 0; i <= 1000; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    };
};
 */

///////////////////////////////////////////////////////////////////////////                1.5 - 1

// Escreva uma função que receba um número e retorne seu dobro.

/* function dobleNum(num) {
    let dobro = num * 2
    console.log(dobro);
    return dobro
}
dobleNum (2);
dobleNum (3);
dobleNum (7);
dobleNum (122); */

//////////////////////////////////////////////////////////////////////////                1.5 - 2

// Escreva uma função que receba um número e retorne seu quadrado.

/* function quadradoNum (num) {
    let calc3 = num * num
    console.log(calc3);
    return calc3;
}
quadradoNum(2);
quadradoNum(3);
quadradoNum(4);
quadradoNum(5);
quadradoNum(6);
quadradoNum(245); */

//////////////////////////////////////////////////////////////////////////                1.5 - 3
/* 
Escreva uma função que receba nome, idade, endereço e retorne uma
mensagem no formato: "Olá, eu sou X, tenho X ano(s) e moro em X". Faça
uso da interpolação de strings. */

/* 
function receberDados (nome, idade, endereco) {
    console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e moro em ${endereco}.`);

};
receberDados("Leonardo", 45, "Maricá");
receberDados("Daniela", 46, "Maricá");
receberDados("Gal", 1, "Maricá");
receberDados("Regina", 73, "Niterói");
receberDados("Bel", 69, "Niterói"); */

//////////////////////////////////////////////////////////////////////////                1.5 - 4

/* 
Escreva uma função que receba dia, mês e ano e retorne a data por
extenso no formato "DD/MM/AAAA". */

/* function dataCompleta (dia, mes, ano) {
    console.log(`${dia}/${mes}/${ano}`);
};

dataCompleta(23, 06, 2022);
dataCompleta(14, 03, 1998);
dataCompleta(01, 09, 1982);
dataCompleta(29, 11, 2021);
dataCompleta(21, 04, 2018); */


//////////////////////////////////////////////////////////////////////////                1.5 - 5
/* 
Escreva uma função que receba um preço de um produto e um percentual.
Retorne o valor aplicado ao desconto. */
/* 
function verificarDesconto (preco, desc) {
    let descDado = preco * desc
    let descPorCento = desc * 100
    let valorFinal = preco - descDado
    console.log(`O produto no valor de ${preco} teve um desconto de ${descPorCento}% e o valor final é de ${valorFinal}. reais`);
}

verificarDesconto (100, 0.10);
verificarDesconto (1000, 0.10);
verificarDesconto (300, 0.50);
verificarDesconto (156, 0.15);
verificarDesconto (14655, 1);

 */

//////////////////////////////////////////////////////////////////////////                1.5 - 6

/* Escreva uma função que receba uma palavra e um número. Retorne a
palavra repetida a quantidade de vezes indicada pelo segundo parâmetro.
Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize
um loop para resolver. */

/* function repetir (palavra, vezes) {
    let result = "";
    for (let i = 0; i < vezes; i++) {
         result += palavra;
        }
        return result;    
};
console.log(repetir("Leo", 10));

 */

//////////////////////////////////////////////////////////////////////////                1.5 - 7
// Escreva uma função que recebe outra função e invoca ela.

function invocarFuncao(funcao) {
    funcao();
    }
    function minhaFuncao() {
    console.log("Essa é a minha função!");
    }
    invocarFuncao(minhaFuncao);
    