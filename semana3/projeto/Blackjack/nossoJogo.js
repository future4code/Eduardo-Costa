import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack - Semana 3 Projeto - F4-Sagan")
let iniciar = confirm("Deseja iniciar uma nova rodada?");

if (iniciar) {
    console.log('Ótimo! Vou embaralhar as cartas!');
    console.log("Pronto!");
    console.log("Vou dar 2 cartas para mim");
    console.log("E também 2 cartas para você");
    let pontosComp;
    let cartasComp = [];
    let pontosUser;
    let cartasUser = [];

    while (cartasComp.length < 2) {
        let carta = comprarCarta();
        cartasComp.push(carta.texto);
        pontosComp = carta.valor;
    }
    while (cartasUser.length < 2) {
        let carta = comprarCarta();
        cartasUser.push(carta.texto);
        pontosUser = carta.valor;
    }
    console.log("Suas cartas foram: ", cartasUser, " e você fez ", pontosUser, " pontos.");
    console.log("Minhas cartas foram: ", cartasComp, " e eu fiz ", pontosComp, " pontos.");

    if (pontosUser > pontosComp) {
        console.log("Parabéns, você ganhou por uma diferença de ", pontosUser - pontosComp, " pontos.");
    }
    if (pontosUser === pontosComp) {
        console.log("Empatamos!");
    }
    if (pontosUser < pontosComp) {
        console.log("Dessa vez eu ganhei! Por uma diferença de ", pontosComp - pontosUser, " pontos.");
    }
} else {
    console.log("O jogo acabou");
}