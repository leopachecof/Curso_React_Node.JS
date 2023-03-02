
//***********OBJETOS**************

/*
-----------------Objetos = servem para estruturar dados -----------------
- propriedades (características)
- métodos (ações)
*/

let pet = {
    nome: "Fred",
    idade: 7,
    peso: 4.5,
    especie: "cachorro",
};
let pet1 = {
    nome: "Valentina",
    idade: 3,
    peso: 4.5,
    especie: "gato",
};

let pet2 = {
    nome: "Dorothy",
    idade: 5,
    peso: 4.5,
    especie: "gato",
};

let pet3 = {
    nome: "Gal",
    idade: 0.3,
    peso: 2,
    especie: "gato",
    comidaFavorita: "ração",
};

//Acesso à propriedades

console.log(pet.nome);
console.log(pet.idade);''
console.log(pet.peso);
console.log(pet.especie);

console.log("--------------------");

//Outra forma de Acesso à propriedades

console.log(pet["nome"]);

console.log("--------------------");
// Alterar o valor ex:
pet.nome = "Neo";
//pet.idade = 6;
//pet.peso = 100;
pet.idade++;
pet.peso = pet.peso + 3;
pet["nome"] = "Batata";

console.log(pet.nome);
console.log(pet.idade);''
console.log(pet.peso);
console.log(pet.especie);
console.log(pet);

// Adicionando nove propriedade

pet.cor ="Laranja"

console.log("--------------------");
console.log(pet);

// EXCERCÍCIO 2

// Tip: altere as informações do seu pet usando uma das sintaxes acima
// adicione novas propriedades ao seu pet

pet3.peso = pet3.peso + 0.5
pet3.brinquedoFavorito = "Bolinha"

console.log(pet3);

