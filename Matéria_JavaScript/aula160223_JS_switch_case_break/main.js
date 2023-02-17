
//***********ESTRURURA DE SELEÇÃO**************

/*
         --- SWITCH - CASE - BREAK ---
*/


let lang = "pt"; // pt, es, en

// switch-case = escolha-caso
switch (lang) {
  case "pt":
    console.log("Olá, Mundo!");
    break; // para as verificações abaixo
  case "es":
    console.log("Hola, Mundo!");
    break;
  case "en":
    console.log("Hello, World!");
    break;
  default: // caso não encontre nenhuma
    console.log("Não há suporte para este idioma: " + lang);
}

//switch-case = escolha-caso

let numero = 2;

switch (numero) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Este dia não existe!");
}

