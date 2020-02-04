console.log('')
console.log('**Exercícios de interpretação de código**')
console.log('')
console.log('EXERCÍCIO 1')
    // **Exercícios de interpretação de código**

// EXERCÍCIO 1

// a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
console.log('a.')
console.log('Não sera inserido nada, pois i é igual a quantidade')
console.log('')

// b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
console.log('b.')
console.log('0, 1, 0, 1, 2, 3')
console.log('')

// c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
console.log('c.')
console.log('0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5')
console.log('')


console.log('EXERCÍCIO 2')

// a. Explicite quais são as saídas impressas no console
console.log('a.')
console.log('0 , 2, undefined') //Achei que de paula seria -1, porém retornou undefined
console.log(' ')

// b. O código funcionaria se a lista fosse um array de números (ao invés de um array de string)  e o nome fosse um número, ao se chamar a função? Justifique sua resposta.
console.log('b.')
console.log('Sim, funcionaria. o array tem a capacidade de armazenar números, e a comparação compara tipos também, então sim, funcionaria normalmente.')

console.log(' ')
console.log('EXERCÍCIO 3')
    // O código abaixo mostra uma função que recebe um array e devolve outro array. Explique rapidamente o que ela faz e sugira um nome melhor para ela!
console.log('a.')
console.log('A função pega um array existente, e para cada item do array faz uma soma e uma multiplicação. no final, coloca o valor final da soma e da multiplicação em um novo array e retorna')
console.log('Um nome melhor seria somaEMultiplicaValores')

console.log(' ')
console.log('EXERCÍCIO 4')
console.log('a.')
console.log('nome da função criada: dogAge')

function dogAge(n) {
    let fatorIdadeDog = 7
    x = n * fatorDog
    return x
}

console.log(' ')
console.log('b.')
console.log('nome da função criada: dadosPessoa')
console.log("dadosPessoa('Eduardo', 34, 'Itu', true)")
console.log(dadosPessoa('Eduardo', 34, 'Itu', true))
console.log("dadosPessoa('Eduardo', 34, 'Itu', false)")
console.log(dadosPessoa('Eduardo', 34, 'Itu', false))

function dadosPessoa(nome, idade, endereco, estudante) {
    if (estudante === true) {
        let resposta = "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou estudante."
        return resposta
    } else {
        let resposta = "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e não sou estudante."
        return resposta
    }
}

console.log(' ')
console.log('EXERCÍCIO 5')

function seculoRomano(seculoArabico) {

    switch (seculoArabico) {
        case 1:
            return "I"
            break;
        case 2:
            return "II"
            break;
        case 3:
            return "III"
            break;
        case 4:
            return "IV"
            break;
        case 5:
            return "V"
            break;
        case 6:
            return "VI"
            break;
        case 7:
            return "VII"
            break;
        case 8:
            return "VIII"
            break;
        case 9:
            return "IX"
            break;
        case 10:
            return "X"
            break;
        case 11:
            return "XI"
            break;
        case 12:
            return "XII"
            break;
        case 13:
            return "XIII"
            break;
        case 14:
            return "XIV"
            break;
        case 15:
            return "XV"
            break;
        case 16:
            return "XVI"
            break;
        case 17:
            return "XVII"
            break;
        case 18:
            return "XVIII"
            break;
        case 19:
            return "XIX"
            break;
        case 20:
            return "XX"
            break;
        case 21:
            return "XXI"
            break;
        default:
            return "Século invalido"
            break;
    }
}

function seculoArabico(ano) {
    let a = (ano / 100)
    let b = Number(a.toFixed())
    let c = a - b
    if (c > 0) {
        return b + 1
    } else {
        return b
    }
}

function descobreSeculo(ano) {
    let secAr = seculoArabico(ano)
    let secRom = seculoRomano(secAr)
    let msg = 'O ano ' + ano + ' pertence ao século ' + secRom + ' (século ' + secAr + ')'
    return msg
}
console.log("Século do ano 1901")
console.log(descobreSeculo(1901))
console.log("Século do ano 1583")
console.log(descobreSeculo(1583))

console.log(" ")
console.log("EXERCÍCIO 6")
const arrayExemplo = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


function qtdElementosArray(array) {
    return array.length

}
console.log("a.")
console.log(qtdElementosArray(arrayExemplo))

function epar(numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(" ")
console.log("b.")
console.log("nome da funcao criada: epar(numero)")
console.log("epar(8888)")
console.log(epar(8888))
console.log("epar(8887)")
console.log(epar(8887))

console.log(" ")
console.log("c.")

function deixaSoParesFull(array) {
    let paresTemp1 = []
    for (let numero of array) {
        if (numero % 2 === 0) {
            paresTemp1.push(numero)
        }
    }
    return paresTemp1.length
}

console.log("nome da funcao criada: deixaSoParesFull(array)")
console.log("deixaSoParesFull(arrayExemplo)")
console.log(deixaSoParesFull(arrayExemplo))

console.log(" ")
console.log("d.")

function deixaSoParesInt(array) {
    let paresTemp2 = []
    for (let numero of array) {
        if (epar(numero) == true) {
            paresTemp2.push(numero)
        }
    }
    return paresTemp2.length
}

console.log("nome da funcao criada: deixaSoParesInt(array)")
console.log("deixaSoParesInt(arrayExemplo)")
console.log(deixaSoParesInt(arrayExemplo))