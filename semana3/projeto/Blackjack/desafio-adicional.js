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
let ganhou = 0;
let perdeu = 0;
let empates = 0;
let partidas = 0;

while (confirm("Deseja iniciar uma nova rodada?")) {
    let pontosComp = 0;
    let cartasComp = [];
    let valoresComp = [];
    let pontosUser = 0;
    let cartasUser = [];
    let resetParDeAs = 22;
    let limiteComp = 15;

    if (true === true) {
        console.log(" ")
        console.log('Ótimo! Vou embaralhar as cartas!');
        console.log("Pronto!");
        console.log(" ")

        while (cartasComp.length < 2) {
            let carta = comprarCarta();
            cartasComp.push(carta.texto);
            valoresComp.push(carta.valor);
            pontosComp = pontosComp + carta.valor;
            if (pontosComp === resetParDeAs) {
                console.log(" ")
                console.log("Saiu um par de As logo nas 2 primeiras cartas. Vamos embaralhar e distriuir novamente")
                pontosComp;
                cartasComp = [];
            }
        }
        while (cartasUser.length < 2) {
            let carta = comprarCarta();
            cartasUser.push(carta.texto);
            pontosUser = pontosUser + carta.valor;
            if (pontosUser === resetParDeAs) {
                console.log(" ")
                console.log("Saiu um par de As logo nas 2 primeiras cartas. Vamos embaralhar e distriuir novamente")
                pontosUser;
                cartasUser = [];
            }
        }

        console.log(" ")
        console.log('Voce tem ', pontosUser, " pontos com as cartas ", cartasUser)
        console.log('A primeira carta do computador é ', cartasComp[0], "(", valoresComp[0], " pontos)")
        while ((pontosUser <= 21 && confirm("Quer comprar mais uma carta?"))) {
            console.log(" ")
            console.log('O computador ja tem ', cartasComp.length, " cartas. As que você pode ver são: ", cartasComp.slice(0, (cartasUser.length - 1)));
            if (true === true) {
                let carta = comprarCarta();
                cartasUser.push(carta.texto);
                pontosUser = pontosUser + carta.valor;
            }
            console.log('Voce tem ', pontosUser, " pontos com as cartas ", cartasUser)
            if (pontosUser > 21) {
                console.log(" ")
                console.log("Você comprou cartas demais e passou de 21 pontos!")
            }
            if (pontosComp < limiteComp) {
                let carta = comprarCarta();
                cartasComp.push(carta.texto);
                pontosComp = pontosComp + carta.valor;
            }

        }
        if (pontosComp < limiteComp) {
            let carta = comprarCarta();
            cartasComp.push(carta.texto);
            pontosComp = pontosComp + carta.valor;
        }
    }

    console.log(" ")
    console.log("**************")
    console.log("Resumo da rodada: ")
    console.log("O computador fez ", pontosComp, " pontos com as cartas ", cartasComp)
    console.log("Você fez ", pontosUser, " pontos com as cartas ", cartasUser)
    console.log(" ")

    if ((pontosUser === pontosComp) || ((pontosUser > 21) && (pontosComp > 21))) { //pontos iguais ou estouro dos 2
        empates++;
        console.log("A partida empatou!")
        alert("A partida empatou!")
    } else if ((pontosUser <= 21) && (pontosUser > pontosComp)) { //pontos menos q 21 e mais pontos q o pc
        ganhou++;
        console.log("Parabéns! Você ganhou!")
        alert("Parabéns! Você ganhou!")
    } else if ((pontosComp <= 21) && (pontosUser < pontosComp)) { //pontos menos que 21 e menos pontos que o pc
        perdeu++;
        console.log("Dessa vez você perdeu! Mais sorte na próxima tentativa.")
        alert("Dessa vez você perdeu! Mais sorte na próxima tentativa.")
    } else if ((pontosUser <= 21) && (pontosComp >= 21)) { //pc estorou e eu nao
        ganhou++;
        console.log("Parabéns! Você ganhou!")
        alert("Parabéns! Você ganhou!")
    } else if ((pontosComp <= 21) && (pontosUser >= 21)) { //pc nao estorou e eu sim
        perdeu++;
        console.log("Dessa vez você perdeu! Mais sorte na próxima tentativa.")
        alert("Dessa vez você perdeu! Mais sorte na próxima tentativa.")
    }
    partidas++
    console.log(" ")
    console.log("**************")
    console.log("Resumo geral: ")
    console.log("Você ganhou ", ganhou, " partidas até agora.", Math.floor((ganhou / partidas * 100)), "% do total de ", partidas, " disputadas.")
    console.log("Você perdeu ", perdeu, " partidas até agora.", Math.floor((perdeu / partidas * 100)), "% do total de ", partidas, " disputadas.")
    console.log("Vocês empataram em ", empates, " partidas até agora.", Math.floor((empates / partidas * 100)), "% do total de ", partidas, " disputadas.")
}