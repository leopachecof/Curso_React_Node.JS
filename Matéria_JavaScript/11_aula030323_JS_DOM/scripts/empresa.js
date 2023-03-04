// Elementos de dados digitados pelo usuário

const campoEmail = document.getElementById("email");
const campoCep = document.getElementById("cep");
const campoUf = document.getElementById("uf");
const campoLocalidade = document.getElementById("localidade");
const campoTelefone = document.getElementById("telefone");

// Saber quando o botão fpoi clicado
const addBtn = document.getElementById("btn-add");

//montar o corpo de linhas da tabela
const conteudoTab = document.getElementById("conteudo-tabela");

// Event Listener = Fofoqueiro = Ouvinte
addBtn.addEventListener("click", () => {
    console.log("Fui pressionado");
  // 1) Coletar dos inputs o que foi digitado
    let usuario = {
        email: campoEmail.value,
        cep: campoCep.value,
        uf: campoUf.value,
        localidade: campoLocalidade.value,
        telefone: campoTelefone.value,
    }
    console.log(usuario);

  // 2) Concatenar na tabela
  conteudoTab.innerHTML +=
    `<tr>
        <td>${usuario.email}</td>
        <td>${usuario.cep}</td>
        <td>${usuario.uf}</td>
        <td>${usuario.localidade}</td>
        <td>${usuario.telefone}</td>
    </tr>`;

    limpar();
    
});

function limpar() {
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("uf").value = "";
    document.getElementById("localidade").value = "";
    document.getElementById("telefone").value = "";
}

// Exercício: Aplicar estilizações na página empresa
// Limpar os campos após concatenar