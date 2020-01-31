let iniciar = prompt("Digite sim se deseja iniciar o jogo:")

if (iniciar === "sim") {
    let menorValor = 1
    let maiorValor = 100
    let chave = (Math.floor((Math.random() * maiorValor) + menorValor));
    console.log("Para facilitar a correção, esta é a chave sorteada: ", chave) //somente pq é chato ficar adivinhando de 1 a 100
    console.log("Chave guardada na memória! Vamos jogar!")
    console.log("Dica: Faça as tentativas entre ", menorValor, " e ", maiorValor)
    let chaveTentada = null
    let historicoTentativas = []
    let rangeMaior = (Math.floor(chave * 1.15))
    let rangeMenor = (Math.floor(chave * 0.85))
    console.log(rangeMaior, rangeMenor)

    while (chaveTentada !== chave) {
        let novaTentativa = Number(prompt("Qual número você acha que é a chave correta?"))
        if (novaTentativa !== chave) {
            historicoTentativas.push(novaTentativa)
            console.log('Você chutou ', novaTentativa, ' e errou! Essa foi sua tentativa de número: ', historicoTentativas.length)
            if (chave > novaTentativa) {
                console.log("DICA: A chave é maior do que esta")
            } else { console.log("DICA: A chave é menor do que esta") }
            if (rangeMenor < novaTentativa && rangeMaior > novaTentativa) {
                console.log("DICA: Você esta bem perto")
            }
        }
        if (novaTentativa === chave) {
            historicoTentativas.push(novaTentativa)
            chaveTentada = novaTentativa
            console.log('**** Parabéns você acertou! ****')
        }
    }
    console.log("Você precisou de ", historicoTentativas.length, "chances para acertar a chave correta, que era ", chave)
    console.log("Estas foram suas tentativas: ")
    console.log(historicoTentativas)
}