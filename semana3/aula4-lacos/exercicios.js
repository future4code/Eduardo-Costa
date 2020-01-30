console.log("*****Exercícios de interpretação de código*****");
console.log(" ")
console.log("Acessar o exercicios.js para verificar")
    // *****Exercícios de interpretação de código*****
    // EXERCÍCIO 1

/*
let sum = 0 //cria a variavel sum
for(let i = 0; i < 15; i++) { // enquanto o valor de i for menor que 15, incrementa 1 em i
  sum += i //redefine o valor de sum para sum atual + i
}
console.log(sum) //mostra a mensagem do valor de sum
*/
//Resposta: o codigo cria a variavel e incrementa o valor de sum enquanto o valor de i seja menor que 15.
// o resultado que mostra no console é 105


// EXERCÍCIO 2
// a. Adiciona o valor de item em novaLista
// b. [10, 15, 25, 30]
// c. SE 3 [12, 15, 18, 21, 27, 30]
// c. SE 4 [12]

console.log(" ")
console.log("*****Exercícios de interpretação de código*****");
console.log(" ")
console.log("EXERCÍCIO 3");
console.log(" ")



const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
console.log("Valores do array original")
console.log(array)
console.log(" ")
console.log("d.")
let maior = array[0]
let menor = array[0]
let novoArray = []
let arrayPares = []

for (valor of array) {
    if (valor > maior) {
        maior = valor
    }
    if (valor < menor) {
        menor = valor
    }
    novoArray.push(valor / 10)
    if (valor % 2 === 0) {
        arrayPares.push(valor)
    }
    console.log("O elemento do índex ", array.indexOf(valor), " é ", valor)
}

console.log(" ")
console.log("a.")
console.log("O maior número é ", maior, " e o menor é ", menor)
console.log(" ")
console.log("b.")
console.log("Novo array com os valores do array original divididos por 10:")
console.log(novoArray)
console.log(" ")
console.log("c.")
console.log("Novo array somente com os valores PARES do array original:")
console.log(arrayPares)
console.log(" ")


// ***** DESAFIOS *****
// DESAFIO 1
console.log('DESAFIO 1')
console.log(" ")

console.log('O resultado de digitar 4 no prompt seria esse:')
console.log('0')
console.log('00')
console.log('000')
console.log('0000')
console.log('Ou seja, ele concatena a string "0" e mostra o resultado até que o total de linhas chegue a 4, quando encerra o programa')

// DESAFIO 2
console.log(" ")
console.log('DESAFIO 2')
console.log(" ")