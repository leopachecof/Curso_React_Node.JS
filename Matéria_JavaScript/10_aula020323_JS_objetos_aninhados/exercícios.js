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
////////////////////////////////////////////////////////////////////////////////

// Crie duas variáveis nome e sobrenome. Crie uma nova variável chamada
// nomeCompleto e realize a concatenação de nome e sobrenome com
// template strings.

/*


function juntarNome (nome, sobrenome) {
    console.log(`O nome completo é ${nome} ${sobrenome}`);
}

juntarNome("Leo" , "Pacheco")

*/
/////////////////////////////////////////////////////////////////////////////
// Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectiva-
// mente: 3, 2, 1, 4 e 5.
//

///////////////////////////////////////////////////////////////////////////
/*
 */

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
///////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////
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
