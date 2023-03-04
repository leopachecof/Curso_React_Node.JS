const semaforoImg = document.getElementById("semaforo-img");
const descParagrafo = document.getElementById("semaforo-descricao");

function trocarVermelho() {
    console.log("mudar para vermelho");
    semaforoImg.src = "https://i.postimg.cc/MKS3MpWx/vermelho.png";
    descParagrafo.innerHTML = "PARE!";
}

function trocarAmarelo() {
    console.log("mudar para Amarelo");
    semaforoImg.src = "https://i.postimg.cc/RCfbZHxX/amarelo.png";
    descParagrafo.innerHTML = "ATENÇÃO, FIQUE PARADO!"; 
    
}

function trocarVerde() {
    console.log("mudar para Verde");
    semaforoImg.src = "https://i.postimg.cc/vHtqWwBn/verde.png"
    descParagrafo.innerHTML = "SIGA EM FRENTE"; 

}