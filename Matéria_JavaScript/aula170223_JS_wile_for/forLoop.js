// **********ESTRUTURA DE REPETIÇÃO - FOR*************



/*
    for(inicialização; condição; atualização) {
        // o código a se repetir
    }
*/

// De 1 até 100

for (let contador = 1; contador <= 100; contador++) {
    console.log(contador)
}

// De 100 até 1

for (let contador = 100; contador >= 1; contador--) {
    console.log(contador)
}

// 1 + 2 + 3 + 4 + .... + 99 + 100 = ?
let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma = i + soma
    console.log(soma)
}
