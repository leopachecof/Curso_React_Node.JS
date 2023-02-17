
//***********OPERADORES LÓGICOS**************

//         NOT-NÃO(!), AND-E(&&), OR-OU(||)

/*
    Tabela Verdade AND (E)
    true  && true  = true
    true  && false = false
    false && true  = false
    false && false = false

    Tabela Verdade OR (OU)
    true  || true  = true
    true  || false = true
    false || true  = true
    false || false = false
    
    TABELA NOT (NÃO)
    !true  = false
    !false = true
    
    
/*
let ligado = true;
let desligado = !ligado; // ou seja... let desligado = a não ligado;

//console.log(ligado);
//console.log(desligado);

let gasolinaTanque = 1;
let naReserva = gasolinaTanque < 5;
let podeAbastecer = desligado && naReserva;
let podeViajar = ligado && !naReserva;
let ficaEmCasa = !podeViajar;

// Operador OR(||) = Basta uma ser true que o final será true
//let taPodendo = podeViajar || podeAbastecer
//console.log(taPodendo)

// let idade = 30;
// let podeBeber = idade >=18;
// console.log(podeBeber);

let idade = 30;
let podeBeber = idade >=18 && idade <= 59;
console.log(podeBeber);

let media = 8.5;
let aprovado = media >= 7;
let sabeIngles = true;

//O candidato será contratado caso esteja aprovado e saiba inglês
let contratado = aprovado && sabeIngles;
console.log(contratado);
*/

let x = 5;
let y = 10;

let expressao = (x > 3) && (y < 20); // true
let expressao2 = (y != 20) || (x >= 5); // true
let expressao3 = (y == 100) || (x < 10); // true
let expressao4 = !(x == 5); // false

console.log(expressao);
console.log(expressao2);
console.log(expressao3);
console.log(expressao4);

/**********ESTRUTURAS CONDICIONAIS (IF -ELSE)************/
/*
    if(condição) {
        faz algo se a condição for verdadeira
    }

*/
let idadeUsuario = 16;

if (idadeUsuario >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}
console.log("Vish!");



