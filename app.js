let numeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas =`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
       exibirTextoNaTela ('p', mensagemTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p' , 'O Número Secreto é menor');
        } else{
            exibirTextoNaTela('p', 'O Número Secreto é maior');
        }
       tentativas++;
        LimparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDelementosNalista = numeroSorteado.length;

    if (quantidadeDelementosNalista == numeroLimite ){
        numeroSorteado = [];
    }

    if (numeroSorteado.includes(numeroEscolhido)){
        return (gerarNumeroAleatorio);
    } else {
        numeroSorteado.push(numeroEscolhido);
        console.log(numeroSorteado);
        return (numeroEscolhido);
       
        }
    }
function LimparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    LimparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}







