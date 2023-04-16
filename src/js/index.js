/*
    OBJETIVO - quando clicarmos no botão temos que mostra a imagem de fundo correspondente.

    - passo 1 - dar um jetio de pegar o elemento do HTML dos botões 

    - passo 2 - dar um jeito de identificar o clique do usuário no botão

    - passo 3 - desmarcar o botão selecionado anterior

    - passo 4 - marcar o botão clicacod como se estivesse selecionado

    - passo 5 - esconder a imagem de fundo anteior 

    - passo 6 - fazer a imagem de fundo correspondente ao botão clicado apararecer
*/ 

// passo 1 - dar um jetio de pegar o elemento do HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
} )

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionados = document.querySelector('.selecionado');
    botaoSelecionados.classList.remove('selecionado');
}
