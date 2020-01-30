let menorValor = 1
let maiorValor = 100
let chave = (Math.floor((Math.random() * maiorValor) + menorValor));
console.log("Chave guardada na memória! Vamos jogar!")
console.log("Dica: Faça as tentativas entre ", menorValor, " e ", maiorValor)
let chaveTentada = null
let historicoTentativas = []
while (chaveTentada !== chave) {
    let novaTentativa = Number(prompt("Qual número você acha que é a chave correta?"))
    if (novaTentativa !== chave) {
        historicoTentativas.push(novaTentativa)
        console.log('Você chutou ', novaTentativa, ' e errou! Essa foi sua tentativa de número: ', historicoTentativas.length)
        if (chave > novaTentativa) {
            console.log("DICA: A chave é maior do que esta")
        } else { console.log("DICA: A chave é menor do que esta") }
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