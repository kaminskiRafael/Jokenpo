//Escolhe a jogada do usuario
// 1 - pedra
// 2 - papel
// 3 - tesoura

jogadorPontos = 0
computadorPontos = 0
//Exibe a mensagem no console
function mensagem (texto){
    document.getElementById('mensagens').innerHTML = texto
}

//Define nome do jogador na tela
function definirNomeJogador(nome) {
    document.getElementById('jogador-nome').innerHTML = nome
}

//sorteia entre dois numeros
function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//calcula e retorna quem ganhou
// 0 - empate
// 1 - jogador
// 2 - computador
function calcularEscolha(jogador, computador) {
    if(jogador == 1 && computador == 1) {
        return 0
    } 
    else if (jogador == 1 && computador == 2) {
        return 2
    } 
    else if (jogador == 1 && computador == 3) {
        return 1
    }
    else if (jogador == 2 && computador == 1) {
        return 1
    }
    else if (jogador == 2 && computador == 2) {
        return 0
    }
    else if (jogador == 2 && computador == 3) {
        return 2
    }
    else if (jogador == 3 && computador == 1) {
        return 2
    }
    else if (jogador == 3 && computador == 2) {
        return 1
    }
    else if (jogador == 3 && computador == 3) {
        return 0
    }
}

//placar dos jogadores
function somarPontoJogador() {
    jogadorPontos ++
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos
}

function somarPontoComputador() {
    computadorPontos ++
    document.getElementById('computador-pontos').innerHTML = computadorPontos
}

//inclui classe selecionado
function selecionar (tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado')
}

//remove classe selecionado
function deselecionar (tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado')
}

function jogar(escolha) {
    jogadorEscolha = escolha
    selecionar('jogador', jogadorEscolha)

    //sorteia a opção do computador
    computadorEscolha = sortear(1,3)
    selecionar('computador', computadorEscolha)

    ganhador = calcularEscolha(jogadorEscolha, computadorEscolha)

    if(ganhador == 0) {
        mensagem("Empate")
    }
    else     if(ganhador == 1) {
        mensagem(`Ponto para ${jogadorNome}!!!`)
        somarPontoJogador()
    }
    else     if(ganhador == 2) {
        mensagem("Ponto para o Computador")
        somarPontoComputador()
    }

    setTimeout(function() {
        deselecionar('jogador', jogadorEscolha)
        deselecionar('computador', computadorEscolha)
        mensagem(`${jogadorNome} escolha novamente!!!`)
    }, 2500)
   
}


document.getElementById('jogador-escolha-1').onclick = function() {
    jogar(1)
}

document.getElementById('jogador-escolha-2').onclick = function() {
    jogar(2)
}

document.getElementById('jogador-escolha-3').onclick = function() {
    jogar(3)
}

jogadorNome = prompt("Qual é o seu nome?")

mensagem(`Bem vindo, ${jogadorNome}! Está preparado???<br> Escolha uma opção acima...`)

definirNomeJogador(jogadorNome)