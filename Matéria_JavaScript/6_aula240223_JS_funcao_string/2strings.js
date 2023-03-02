// Strings = cadeia de caracteres

let meuPet = "Fred"; // "", '', ``
// F(0), r(1), e(2), d(3) --> são indices
console.log(meuPet);
console.log(meuPet[0]);
console.log(meuPet[1]);
console.log(meuPet[2]);
console.log(meuPet[3]);

console.log("----------tamanho----------");
console.log(meuPet.length);// Retorna o tamanho da string
//

console.log("---------contador----------");
//percorrendo string da posição 0 até lengtn - 1
for (i = 0; i < meuPet.length; i++) {
    console.log(meuPet[i]);
}
//
console.log("----------length---------");
//A posição final da string é sempre length - 1
console.log(meuPet[meuPet.length - 1]);


console.log("-------toLocaleLowerCase/toLocaleUpperCase-----");
//Deixar tudo minusculo e maiusculo
console.log(meuPet.toLocaleLowerCase());
console.log(meuPet.toLocaleUpperCase());


console.log("--------endsWith/startsWith-------");
let arquivo = "batata.mp4";
console.log(arquivo.endsWith(".mp4"));
console.log(arquivo.startsWith("bat"));


console.log("--------includes-------");
let frase = "Eu comi arroz e batata";
console.log(frase.includes(".feijão"));
console.log(frase.indexOf("c"));
console.log(frase.lastIndexOf("e")); // busca da dir p/ esq, mas a contagem é da esq p/ dir. conta espaço e virgula normalmente.
console.log(frase.replace("batata", "ovo")); // troca a palavra por outra.

let palavra2 = "BATATA";
console.log(palavra2.slice(1));// resultado: ATATA corta do 1 até o final.
console.log(palavra2.slice(1, 4));// resultado: ATA pois ele retira o número indicado