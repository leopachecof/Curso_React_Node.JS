/************FUNÇÕES***********/

// Função = procedimento = método
// Sintaxe básica
function dizOla() {
    //declaração de função
    console.log("Hello, Word!")
    console.log("!!!!!!!!")
}
//Invocação = chamada

dizOla();
dizOla();
dizOla();

console.log("----------------");

function exemplo01() { //    escopo de função
    let a = 1;
    let b = 4;
    console.log(`A soma é ${a + b}`);
}

exemplo01();
exemplo01();
exemplo01();

console.log("----------------");

let num1 =3;
let num2 =5;

function exemplo02() {
    console.log(`A soma é ${num1 + num2}`);
}
exemplo02();

console.log("----------------");
// Parâmetros = entrada = o que a função precisa para executar
// = Informação dinâmica

function soma(a, b) {
    console.log(`A soma é ${a} + ${b} = ${a + b}`);
}

soma (20, 75)
soma (10, 5)
soma (9, 80)
soma (1, 1)

console.log("----------------");

function calculadora(a, b, c) {
    console.log(`A soma é ${a + b + c}`);
    console.log(`A subtração é ${a - b - c}`);
    console.log(`A multiplicação é ${a * b * c}`);
    console.log(`A divisão é ${a / b / c}`);
}

// Chamada?

calculadora(10, 5, 2);
console.log("----------------");
let numero1 = 10;
let numero2 = 5;
let numero3 = 2;
calculadora(numero1, numero2, numero3); // argumentos = valores passados para os parâmetros
console.log("----------------");

// Declare uma função que receba 3 notas e mostra a média entre elas.

function media(nota1, nota2, nota3) {
    let notaMedia = (nota1 + nota2 + nota3) / 3;
    console.log(`A média entre as notas é ${notaMedia.toFixed(2)}`);
}

media(7.5, 8.0, 9.0);
media(7, 6, 3.5);
media(7.7, 9.6, 4.5);

// função ENTRADA(parâmetros) -> PROCESSAMENTO(lógica) -> SAÍDA(retorno )
//y = f(x)
//f = função
//x = parâmetros
//y = resultado/retorno

/*
Esse mesma função acima pode ser descrita com retorno para não se perder os resultados. Salvando-as em novas variáveis:
*/

console.log("----------------");
function media2(n1, n2, n3) {
    let resultado = (n1 + n2 + n3) / 3;
    console.log(`A média entre as notas é ${resultado}`);

    return resultado; // indica que o valor da variável será "externizado", lembrando que só é externado o valor e não a variável.
    console.log(teste) // dead-cod = cód que nunca vai ser executado, pois está após o "return"
}
console.log("----------------");
let medBiologia = media2(7.5, 8.0, 9.0);
let medMatematica = media2(7, 6, 3.5);
let medPortugues = media2(7.7, 9.6, 4.5);

console.log(`Biologia = ${medBiologia.toFixed(2)}`);
console.log(`Matemática = ${medMatematica.toFixed(2)}`);
console.log(`Português = ${medPortugues.toFixed(2)}`);

function estaAprovado(n1, n2, n3) {
    // indicar se o aluno foi aprovado ou não
    let med = media(n1, n2, n3);
  
    if (med >= 7) {
      console.log("Aprovado!");
      return true; // podemos retornar "Aprovado!"
    } else {
      console.log("Reprovado!");
      return false; // podemos retornar "Reprovado!"
    }
  }
  console.log("----------------");
  let statusAluno = estaAprovado(6.5, 3.0, 8.6);
  console.log(statusAluno);