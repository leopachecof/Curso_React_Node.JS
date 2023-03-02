console.log("-                      -");
console.log("----------MÉTODO--------");
console.log("-                      -");

// Métodos = ação de um objeto


//-----------------------------------------------------------------------------------------
let pet = {
    // Atributos    
    nome: "Fred",
    idade: 5,
    peso: 3.5,
    // Métodos = function
    dormir() {  //é uma espécie de função
        console.log("Estou dormindo. zzzzzzzzzzzzzz");
    },
    comer(comida) { // coloco parâmetros para ter variedades de comidas por ex.
        console.log(`Estou comendo ${comida}`);
    },
    brincar(brinquedo) { 
        console.log(`Estou brincando com ${brinquedo}`);
    },
};
//-----------------------------------------------------------------------------------------
//   "." lista as propriedades e métodos de um objeto
pet.dormir(); //Invocação de função/métodos
pet.comer("Peixe");
pet.comer("Batata");
pet.brincar("Bolinha");

/*
//-----------------------------------------------------------------------------------------
console.log("-                      -");
console.log("-----------THIS---------");
console.log("-                      -");

let pessoa = {
    nome: "João",
    idade: 25,
    nacionalidade: "brasileiro",
    dizerOi() {
        //        console.log(`Oi, meme é ${pessoa.nome}`);
        console.log(`Oi, meu é ${this.nome}`); // this representa o objeto dono do método.
    },
    dizerOi2() {
        console.log(`Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.nacionalidade}`);
    },
    envelhecer() {
        this.idade++;
    },
    cuidarPet(animal) {
        console.log(`Estou cuidando do ${pet.nome}`);
        animal.comer("Batata")
        animal.peso += 0.2;
    },
};

//-----------------------------------------------------------------------------------------
pessoa.dizerOi();

console.log("-                      -");
console.log("------EXERCÍCICIO-------");
console.log("-                      -");
//-----------------------------------------------------------------------------------------
pessoa.dizerOi2();
console.log("------Alterando item-------");
pessoa.nome = "Leo";
pessoa.dizerOi2();
//-----------------------------------------------------------------------------------------
pessoa.envelhecer();
pessoa.envelhecer();
pessoa.envelhecer();
//-----------------------------------------------------------------------------------------
pessoa.dizerOi2();
//Objeto(pessoa).Função(cuidarPet)
pessoa.cuidarPet(pet);
console.log(pet.peso);

console.log("-                      -");
console.log("------EXERCÍCICIO-------");
console.log("-                      -");
//-----------------------------------------------------------------------------------------

let conta = {
    // Atributos   
    codigo: "0-10001",
    saldo: 1000,
    cpf: "123.456.789-10",
        titular: "João da Silva",
        // Métodos
        saque(valor) {  
            this.saldo -= valor;
            
        },
        deposito(valor) {
            this.saldo += valor;
        },
    };
    
    console.log(`Olá srº ${conta.titular}, seu saldo atual é de ${conta.saldo}`);
    conta.saque(100);
    console.log(`Olá srº ${conta.titular}, você fez um saque de ${conta.saque}e seu saldo atual é de ${conta.saldo}`);
    conta.deposito(50);
    console.log(`Olá srº ${conta.titular}, você fez um depósito de ${conta.deposito} e seu saldo atual é de ${conta.saldo}`);
    console.log(`Olá srº ${conta.titular}, seu saldo atual é de ${conta.saldo}`);
    
    console.log("-                      -");
    console.log("------EXERCÍCICIO-------");
    console.log("-                      -");
    //-----------------------------------------------------------------------------------------
    // Exercício II: Crie um objeto que representa um produto.
    // Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
    // Métodos:
    // - calcularPrecoDesconto(): retorna o valor aplicado ao desconto
    // - apresentacao(): mostra as informações das propriedades
    // - comprar(total): reduz a quantidade em relação ao total
    
    let produto = {
        
        // Atributos
        nome: "Bola de Basquete",
        descricao: "Tamanho Oficial",
        quantidade: 10,
        precoOriginal: 100,
        desconto: 25,
        
        // Métodos
        
        calcularPrecoDesconto() {
            let precoCompra = this.precoOriginal - this.desconto;
            return precoCompra
        },

        apresentacao() {
            console.log(this);
        },
        comprar(total) {
            this.quantidade -= total;
        },
    };
    
    
    produto.apresentacao();
    produto.comprar(20);
    produto.comprar(20);
    console.log(produto.quantidade);
    console.log(produto.calcularPrecoDesconto());
    */