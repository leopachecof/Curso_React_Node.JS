
//***********Objetos aninhados e arrays de objetos**************

/*
----------------- -----------------
Objeto aninhado = objeto dentro de outro

*/

let pessoa = {
    nome: "José Almir",
    cpf: "999.999.999-99",
    contato: {
        email: "jose.almir@soulcode.com",
        telefone: "(99) 9-9999-9999",
    },
    endereco: {             //agrupa propriedades
        cidade: "Ubajara",
        estado: "CE",
        cep: "62350-000",
        rua: "Rua X",
        numero: 271,
    },
    objetivosProfissionais: ["Home Office", "CLT", "Desenvolvedor Senior"],
    formacao: [
        {nome: "Ensino Médio", periodo: "2006-2008"},
        {nome: "Técnico em Informática", periodo: "2008-2010"},
        {nome: "Bacharelado em Batata", periodo: "2010-2014"},

    //    "Ensino médio, 2006-2008",
    //   "Técnico em Informática, 2008-2010",
    //    "Bacharelado em Batata, 2010-2014"
    ],
};

// console.log(pessoa);
// console.log(pessoa.email);
// console.log(pessoa.endereco);
// console.log(pessoa.endereco.estado);
// console.log(pessoa.contato.email);
// console.log(pessoa.objetivosProfissionais);
// console.log(pessoa.objetivosProfissionais[0]);
console.log(pessoa.formacao);
console.log(pessoa.formacao[0].periodo);
console.log(pessoa.formacao[1].nome);
console.log(pessoa.formacao[2]);



